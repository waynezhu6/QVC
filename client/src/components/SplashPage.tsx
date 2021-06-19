import React, { useState } from 'react';
import { Line  } from 'rc-progress';
import { HiOutlineUserGroup, HiUserAdd } from 'react-icons/hi'
import styles from '../styles/pages/SplashPage.module.scss';

const SplashPage: React.FC = () => {

  const [stage, setStage] = useState(1);

  const renderStage = () => {
    switch(stage){
      case 0:
        return <Select/>
      case 1:
        return <Auth/>
    }
  }

  return(
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.title}>
          QVC
        </div>

        <Line style={styles.line} percent="5" strokeWidth="1" strokeColor="#1877F2"/>

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
  return(
    <div>
      <div className={styles.option}>
        <HiOutlineUserGroup/> Create a New Room
      </div>
      <div className={styles.option}>
        <HiUserAdd/> Join a Room
      </div>
    </div>
  );
}

const Auth: React.FC = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.label}>Room Name</div>
      <input type="text" placeholder="Room Name"></input>

      <div className={styles.label}>Room Password</div>
      <input type="password" placeholder="Room Password"></input>

      <div className={styles.label}>Your Username</div>
      <input type="text" placeholder="Your Username"></input>

      <button>Create Room</button>
      <div className={styles.alternative}>Join a Room Instead?</div>

    </div>
  )
}