import React, { useState } from 'react';
import styles from '../styles/pages/SplashPage.module.scss';

const Auth: React.FC = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.auth}>
      <div className={styles.label}>Room Name</div>
      <input type="text" placeholder="Room Name"></input>

      <div className={styles.label}>Room Password</div>
      <input type="password" placeholder="Room Password"></input>

      <button>
        {isLogin ? "Join Room" : "Create Room"}
      </button>
      <div className={styles.alternative} onClick={() => setIsLogin(!isLogin)}>
        {/* {isLogin ? "Create a Room Instead?" : "Join a Room Instead?"} */}
        Back
      </div>

    </div>
  )
}

export default Auth;
