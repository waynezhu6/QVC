import React, { useEffect } from 'react'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

type Props = {
  video: File | null,
  subtitles: File | null
}

const Plyr: React.FC<Props> = (props) => {

  useEffect(() => {

    let player = new plyr('.js-plyr', config.options);
    player.on('pause', (e) => {console.log(e)});

    if(props.video !== null){
      let url = URL.createObjectURL(props.video);
      console.log(url);
      player.source = {
        type: 'video',
        title: props.video ? props.video.name : '*QVC*',
        sources: [
          {
            src: url,
            type: 'video/mp4'
          }
        ]
      }
    }

    return(() => {
      player.destroy();
    });

  }, [props.video, props.subtitles]);

  return(
    <video className='js-plyr plyr' onPause={() => console.log('pause')}/>
  )
}

const config = {
  options: {
    controls: [
      // 'rewind',
      'play',
      // 'fast-forward',
      'progress',
      'current-time',
      // 'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
      'pip'
    ],
    settings: ['captions', 'quality', 'speed'],
    // i18n: {
    //   restart: 'Restart',
    //   rewind: 'Rewind {seektime}s',
    //   play: 'Play',
    //   pause: 'Pause',
    //   fastForward: 'Forward {seektime}s',
    //   seek: 'Seek',
    //   seekLabel: '{currentTime} of {duration}',
    //   played: 'Played',
    //   buffered: 'Buffered',
    //   currentTime: 'Current time',
    //   duration: 'Duration',
    //   volume: 'Volume',
    //   mute: 'Mute',
    //   unmute: 'Unmute',
    //   enableCaptions: 'Enable captions',
    //   disableCaptions: 'Disable captions',
    //   download: 'Download',
    //   enterFullscreen: 'Enter fullscreen',
    //   exitFullscreen: 'Exit fullscreen',
    //   frameTitle: 'Player for {title}',
    //   captions: 'Captions',
    //   settings: 'Settings',
    //   menuBack: 'Go back to previous menu',
    //   speed: 'Speed',
    //   normal: 'Normal',
    //   quality: 'Quality',
    //   loop: 'Loop',
    // },
  },
  sources: {
    type: 'video',
    sources: [
      {
        src: '/path/to/movie.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: '/path/to/movie.webm',
        type: 'video/webm',
        size: 1080,
      },
    ],
  }
}

export default Plyr;
