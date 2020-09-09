import React from 'react'
import styles from './Caption.module.scss'

export default function Caption(props) {
  const isCurrent = () => {
    return (props.progress > props.start) && (props.progress < props.end)
  }

  return(
    <div className={`${styles.Caption} ${isCurrent() && styles.CaptionCurrent}`}>
      {props.text}
    </div>
  )
}