import React, { useContext } from 'react';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import PrivateRoute from './components/PrivateRoute';
import { StateContext, State } from './components/StateContext';
import './App.scss';

import Viewer from './pages/Viewer';
import SplashPage from './pages/SplashPage';
// import Configurator from './components/Configurator';
// import Authenticator from './components/Authenticator'

const App: React.FC = () => {

  const [state, setState] = useContext(StateContext) as [State, React.Dispatch<React.SetStateAction<State>>];

  socket.on('createRoom', (data: {result: boolean}) => {
    setState({
      ...state, 
      isAuthorized: data.result, 
      navigation: data.result ? 2 : state.navigation
    });
  });

  socket.on('joinRoom', (data: {result: boolean}) => {
    setState({
      ...state, 
      isAuthorized: data.result, 
      navigation: data.result ? 2 : state.navigation
    });  });

  socket.on('disconnect', () => {
    socket.removeAllListeners();
  });

  return(
    <div>
      <Viewer/>
      {/* {!auth ? <Authenticator/> : null}
      {!auth || video !== null ? null :
        <Configurator 
          video = {video}
          setVideo={setVideo}
          subtitles = {subtitles} 
          setSubtitles={setSubtitles}
        />
      } */}

      <HashRouter>
        <Switch>
          <Route exact path="/join"><SplashPage/></Route>
          <Route exact path="/create"></Route>
          <PrivateRoute exact path="/"></PrivateRoute>
          <Redirect to="/join"/>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
export const socket = io('https://waynezhu.ca', {secure: true, path: "/qvc/socket.io"});
// export const socket = io('http://localhost:5000', {secure: true});
