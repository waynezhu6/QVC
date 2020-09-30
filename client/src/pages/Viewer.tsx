import React, { useEffect, useRef } from 'react'
import { socket } from '../App';
//import Plyr from 'plyr'
import 'plyr/dist/plyr.css'
 
import styles from '../styles/pages/Viewer.module.scss';

type Props = {
  video: File | null,
  subtitles: File | null
}

const Viewer: React.FC<Props> = (props) => {

  var player = useRef<HTMLVideoElement>(null);
 
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

    if(props.video !== null && player.current){
      let url = URL.createObjectURL(props.video);
      player.current.src = url;
    }

    return(() => {
      if(player.current){
        player.current.removeEventListener('play', () => {});
        player.current.removeEventListener('pause', () => {});
      }
    });

  }, [props]);

  return(
    <div className={`${styles.body} ${props.video ? styles.show : styles.hidden}`}>
      <video controls ref={player}/>
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