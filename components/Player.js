import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

export default function Player(props) {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if(props.seekTo) {
      player.current.seekTo(props.seekTo, 'seconds');
      setPlaying(true);
    }
  }, [props.seekTo])

  return(
    <ReactPlayer playing={playing} ref={player} onProgress={props.onProgress} className={props.className} url={`https://www.youtube.com/watch?v=${props.id}`} />
  );
}