import React from 'react'
import styles from './Caption.module.scss'

export default function Caption(props) {
  const isCurrent = (time) => {
    return (time > props.start) && (time < props.end)
  }

  const isSaved = () => {
    return props.saved.some(time => isCurrent(time))
  }

  return(
    <div className={`${styles.Caption} ${isCurrent(props.progress) && styles.CaptionCurrent} ${isSaved() && styles.CaptionSaved}`}>
      {props.text}
    </div>
  )
}