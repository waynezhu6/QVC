import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileVideo } from 'react-icons/fa';
import { MdSubtitles } from 'react-icons/md';
import styles from '../styles/components/Configurator.module.scss';

type Props = {
  video: File | null,
  setVideo: React.Dispatch<React.SetStateAction<File | null>>,
  subtitles: File | null,
  setSubtitles: React.Dispatch<React.SetStateAction<File | null>>
}

const Configurator: React.FC<Props> = (props) => {

  const {getRootProps, getInputProps, open} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 2,
    accept: 'text/vtt, video/mp4, video/webm, application/pdf, image/png',
    onDropAccepted: files => onDrop(files)
  });

  const onDrop = (files: any) => {
    console.log(files);
      for(const file of files){
        let ext = file.name.slice(-3);
        if(ext === "mp4"){
          props.setVideo(file);
        }
        else if(ext === "vtt"){
          props.setSubtitles(file);
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
            <span className={styles.filename}>{props.video ? props.video.name : ""}</span>
          </div>
        </div>

        <div className={styles.banner}>
          <MdSubtitles className={styles.icon}/>
          <div className={styles.text}>
            <span className={styles.label}>Drag &amp; Drop</span>
            <span className={styles.highlight}>VTT</span>
            <span className={styles.filename}>{props.subtitles ? props.subtitles.name : ""}</span>
          </div>
        </div>

        <div className={styles.chooseFile} onClick={open}>
          Or Choose a File
        </div>

        <div className={`${styles.chooseFile} ${styles.playDisabled}`}>
          Continue
        </div>
        
      </div>               

      </div>
  );
}

export default Configurator;