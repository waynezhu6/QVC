import React, { useState, useContext } from 'react';
import { Line  } from 'rc-progress';
import { HiOutlineUserGroup, HiUserAdd } from 'react-icons/hi'
import styles from '../styles/pages/SplashPage.module.scss';
import { StateContext, State } from '../components/StateContext';
import Configurator from '../components/Configurator';
import { socket } from '../App';

const SplashPage: React.FC = () => {

  const [state] = useContext(StateContext) as [State];

  const renderStage = () => {
    switch(state.navigation){
      case 0:
        return <Select/>
      case 1:
        return <Auth/>
      case 2:
        return <Configurator/>
    }
  }

  return(
    <div className={styles.body} style={state.isConfigured ? {display: "none"} : {}}>
      <div className={styles.container}>
        <div className={styles.title}>
          QVC
        </div>

        <Line 
          style={styles.line} 
          percent={5 + (state.navigation * 45)}
          strokeWidth="1"
          strokeColor="#1877F2"
        />

        <div className={styles.subtitle}>
          Welcome to Quarantine Video Client! Sync playback when watching videos remotely.
        </div>

        {renderStage()}

      </div>
    </div>
  );
}

export default SplashPage; 


const Select: React.FC = () => {

  const [state, setState] = useContext(StateContext) as [State, React.Dispatch<React.SetStateAction<State>>];

  return(
    <div>
      <div className={styles.option} onClick={() => setState({...state, navigation: 1, isLogin: true})}>
        <HiUserAdd/> Join a Room
      </div>
      <div className={styles.option} onClick={() => setState({...state, navigation: 1, isLogin: false})}>
        <HiOutlineUserGroup/> Create a Room
      </div>
    </div>
  );
}

const Auth: React.FC = () => {

  const [state, setState] = useContext(StateContext) as [State, React.Dispatch<React.SetStateAction<State>>];
  
  const [room, setRoom] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const joinRoom = () => {
    //join room, register with socket.id
    socket.emit('joinRoom', {room, password, username, id: socket.id});
  }

  const createRoom = () => {
    //join room, register with socket.id
    socket.emit('createRoom', {room, password, username, id: socket.id});
  }

  return (
    <div className={styles.auth}>
      <div className={styles.label}>Room Name</div>
      <input 
        type="text" 
        placeholder="Room Name"
        onChange={e => setRoom(e.target.value)}
      />

      <div className={styles.label}>Room Password</div>
      <input 
        type="password" 
        placeholder="Room Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={() => {
        if(state.isLogin)
          joinRoom();
        else
          createRoom();
      }}>
        {state.isLogin ? "Join Room" : "Create Room"}
      </button>
      <div 
        className={styles.alternative} 
        onClick={() => {
          setState({...state, navigation: 0});
        }
      }>
        Back
      </div>

    </div>
  );
}

