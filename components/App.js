import React, { useState, useEffect } from 'react'
import Script from './Script'
import Player from './Player'
import styles from './App.module.scss'

export default function App(props) {
  const id = 'kTvHIDKLFqc'

  const [progress, setProgress] = useState(0);
  const [saved, setSaved] = useState([]);

  const onProgress = (progress) => {
    setProgress(progress.playedSeconds);
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 83) {
      event.preventDefault();
      setSaved([...saved, progress]);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", event => handleKeyPress(event))
  })

  return(
    <div className={styles.App}>
      <Script progress={progress} saved={saved} className={styles.Script} id={id} />
      <Player onProgress={onProgress} className={styles.Player} id={id} />
    </div>
  );
}