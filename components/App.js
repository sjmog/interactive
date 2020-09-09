import React, { useState, useEffect } from 'react'
import Script from './Script'
import Player from './Player'
import styles from './App.module.scss'

export default function App(props) {
  const id = 'kTvHIDKLFqc'

  const [progress, setProgress] = useState(0);
  const [saved, setSaved] = useState([]);
  const [mode, setMode] = useState('watch');

  const toggleMode = () => setMode(mode === 'watch' ? 'review' : 'watch')

  const onProgress = (progress) => {
    setProgress(progress.playedSeconds);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 83) {
        event.preventDefault();
        setSaved([...saved, progress]);
      }

      if (event.keyCode === 13) {
        event.preventDefault();
        toggleMode();
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => { document.removeEventListener("keydown", handleKeyPress) }
  })

  return(
    <div className={styles.App}>
      <Script progress={progress} saved={saved} mode={mode} className={styles.Script} id={id} />
      <Player onProgress={onProgress} className={styles.Player} id={id} />
    </div>
  );
}