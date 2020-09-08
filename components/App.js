import React from 'react'
import Script from './Script'
import Player from './Player'
import styles from './App.module.scss'

export default function App(props) {
  const id = 'kTvHIDKLFqc'

  return(
    <div className={styles.App}>
      <Script className={styles.Script} id={id} />
      <Player className={styles.Player} id={id} />
    </div>
  );
}