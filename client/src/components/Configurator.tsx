import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileVideo } from 'react-icons/fa';
import { MdSubtitles } from 'react-icons/md';
import styles from '../styles/components/Configurator.module.scss';
import { StateContext, State } from './StateContext';


const Configurator: React.FC = () => {

  const [state, setState] = useContext(StateContext) as [State, React.Dispatch<React.SetStateAction<State>>];

  const {getRootProps, getInputProps, open} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 2,
    onDropAccepted: files => onDrop(files)
  });

  const onDrop = (files: any) => {
    console.log(files);
      for(const file of files){
        let ext = file.name.slice(-3);
        if(ext === "mp4"){
          setState({...state, video: file});
        }
        else if(ext === "vtt"){
          setState({...state, subtitles: file});
        }
      }
  }

  return(
    <div className={styles.body}>
      <div {...getRootProps()} className={styles.wrapper}>
        <input {...getInputProps()}/>

        <div/>

        <div className={styles.banner}>
          <FaFileVideo className={styles.icon}/>
          <div className={styles.text}>
            <span className={styles.label}>Drag &amp; Drop</span>
            <span className={styles.highlight}>MP4 or WEBM</span>
            <span className={styles.filename}>{state.video ? state.video.name : ""}</span>
          </div>
        </div>

        <div className={styles.banner}>
          <MdSubtitles className={styles.icon}/>
          <div className={styles.text}>
            <span className={styles.label}>Drag &amp; Drop</span>
            <span className={styles.highlight}>VTT</span>
            <span className={styles.filename}>{state.subtitles ? state.subtitles.name : ""}</span>
          </div>
        </div>

        <div className={styles.chooseFile} onClick={open}>
          Or Choose a File
        </div>

        <div 
          className={`
            ${styles.chooseFile} 
            ${state.video ? styles.playEnabled : styles.playDisabled}
          `}
          onClick={() => {
            if(state.video){
              setState({...state, isConfigured: true})
            }
          }}
        >
          Continue
        </div>
        
      </div>               

      </div>
  );
}

export default Configurator;
