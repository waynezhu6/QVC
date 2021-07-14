import React, { useEffect, useRef, useContext } from 'react'
import { socket } from '../App';
//import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
 
import styles from '../styles/pages/Viewer.module.scss';
import { StateContext, State } from '../components/StateContext';


const Viewer: React.FC = () => {

  const [state] = useContext(StateContext) as [State];
  var player = useRef<HTMLVideoElement>(null);
  var track = useRef<HTMLTrackElement>(null);
 
  useEffect(() => {

    var toggle = true;
    if(player.current){

      player.current.addEventListener('play', () => {
        if(toggle && player.current){
          socket.emit('play', {id: socket.id, currentTime: player.current.currentTime});
        }
        toggle = true;
      });

      player.current.addEventListener('pause', () => {
        if(toggle && player.current){
          socket.emit('pause', {id: socket.id, currentTime: player.current.currentTime});
        }
        toggle = true;
      });

    }

    socket.on('pause', (data: {id: string, currentTime: number}) => {
      if(data.id !== socket.id && player.current){
        toggle = false;
        player.current.pause();
        player.current.currentTime = data.currentTime;
      }
    });
    socket.on('play', (data: {id: string, currentTime: number}) => {
      if(data.id !== socket.id && player.current){
        toggle = false;
        player.current.currentTime = data.currentTime;
        player.current.play();
      }
    });

    if(state.video !== null && player.current){
      let url = URL.createObjectURL(state.video);
      player.current.src = url;
    }

    if(state.subtitles !== null && track.current){
      let url = URL.createObjectURL(state.subtitles);
      track.current.src = url;
    }

    return(() => {
      if(player.current){
        player.current.removeEventListener('play', () => {});
        player.current.removeEventListener('pause', () => {});
      }
    });

  }, [state.video, state.subtitles]);

  return(
    <div className={`${styles.body} ${state.isConfigured ? styles.show : styles.hidden}`}>
      <video controls ref={player}>
        <track label="English" kind="subtitles" ref={track}/>
      </video>
    </div> 
  );
}

// const config = {
//   options: {
//     controls: [
//       // 'rewind',
//       'play',
//       // 'fast-forward',
//       'progress',
//       'current-time',
//       // 'duration',
//       'mute',
//       'volume',
//       'settings',
//       'fullscreen',
//       'pip'
//     ],
//     settings: ['captions', 'quality', 'speed'],
//   }
// }

export default Viewer;
