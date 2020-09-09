import React, { useState } from 'react'
import styles from './UrlInput.module.scss'

export default function UrlInput(props) {
  const [error, setError] = useState(false)

  const onBlur = (e) => {
    const id = youtubeIdFromUrl(e.target.value);

    id ? props.onChange(id) : setError(true);
  }

  const youtubeIdFromUrl = (url) => {
    const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
    return (match && match[7].length == 11) ? match[7] : false;
  }

  const errorOrNothing = () => {
    if(!error) { return null; }

    return <p>Error: Incorrect YouTube URL supplied.</p>
  }

  return(
    <div className={styles.UrlInput}>
      <input type="url" defaultValue={`https://www.youtube.com/watch?v=${props.id}`} onBlur={onBlur} />
      {errorOrNothing()}
    </div>
  )
}