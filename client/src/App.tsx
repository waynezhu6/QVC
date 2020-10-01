import React, { useState } from 'react';
import io from 'socket.io-client';

import './App.scss';

import Viewer from './pages/Viewer';
import Configurator from './components/Configurator';
import Authenticator from './components/Authenticator'

const App: React.FC = () => {

  const [auth, setAuth] = useState(false);
  const [video, setVideo] = useState<File|null>(null);
  const [subtitles, setSubtitles] = useState<File|null>(null);

  socket.on('createRoom', (data: {result: boolean}) => {
    setAuth(data.result);
  });

  socket.on('joinRoom', (data: {result: boolean}) => {
    setAuth(data.result);
  });

  socket.on('disconnect', () => {
    socket.removeAllListeners();
  });

  return(
    <div>
      <Viewer video={video} subtitles={subtitles}/>
      {!auth ? <Authenticator/> : null}
      {!auth || video !== null ? null :
        <Configurator 
          video = {video}
          setVideo={setVideo}
          subtitles = {subtitles} 
          setSubtitles={setSubtitles}
        />
      }
    </div>
  );
}

export default App;
export const socket = io('http://35.202.216.223:8080/');
