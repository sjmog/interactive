import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

export default function Player(props) {
  const player = useRef(null);

  return(
    <ReactPlayer ref={player} onProgress={props.onProgress} className={props.className} url={`https://www.youtube.com/watch?v=${props.id}`} />
  );
}