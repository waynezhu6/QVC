import React, { useState } from 'react';
import { socket } from '../App';
import styles from '../styles/components/Authenticator.module.scss';

const Authenticator: React.FC = () => {

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

  return(
    <div className={styles.body}>
      <div className={styles.wrapper}>

        <form className={styles.form}>
          <input 
            type="text" 
            placeholder='Room Name' 
            onChange={e => setRoom(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder='Room Password'
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
            required
          />
        </form>

        <div className={styles.buttons}>
          <button onClick={() => createRoom()}>Create Room</button>
          <div/>
          <button onClick={() => joinRoom()}>Join Room</button>
        </div>

      </div>
    </div>
  );
}

export default Authenticator;