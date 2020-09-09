import React, { useState } from 'react'
import Script from './Script'
import Player from './Player'
import styles from './App.module.scss'

export default function App(props) {
  const id = 'kTvHIDKLFqc'

  const [progress, setProgress] = useState(0);

  const onProgress = (progress) => {
    setProgress(progress.playedSeconds);
  }

  return(
    <div className={styles.App}>
      <Script progress={progress} className={styles.Script} id={id} />
      <Player onProgress={onProgress} className={styles.Player} id={id} />
    </div>
  );
}