import React from 'react'
import ReactPlayer from 'react-player'

export default function Player(props) {
  return(
    <ReactPlayer onProgress={props.onProgress} className={props.className} url={`https://www.youtube.com/watch?v=${props.id}`} />
  );
}