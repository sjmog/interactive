import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import styles from './Player.module.scss'

export default function Player(props) {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);

  useEffect(() => {
    if(props.seekTo) {
      player.current.seekTo(props.seekTo, 'seconds');
      setPlaying(true);
    }
  }, [props.seekTo])

  useEffect(() => {
    setWidth(window.innerWidth * 0.618);
    setHeight(window.innerHeight - 150);
  }, [])

  return(
    <div className={styles.Player}>
      <ReactPlayer width={width} height={height} playing={playing} ref={player} onProgress={props.onProgress} className={props.className} url={`https://www.youtube.com/watch?v=${props.id}`} />
    </div>
  );
}