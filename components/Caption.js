import React from 'react'
import styles from './Caption.module.scss'

export default function Caption(props) {
  const isCurrent = (time) => {
    return (time > props.start) && (time < props.end)
  }

  const isSaved = () => {
    return props.saved.some(time => isCurrent(time))
  }

  const isVisible = () => {
    return props.mode === 'watch' || (props.mode === 'review' && isSaved())
  }

  const onClick = (e) => {
    e.preventDefault();

    props.onClick(props.start);
  }

  return(
    <div 
      className={`${styles.Caption} ${styles[`Caption--${props.mode}`]} ${isVisible(props.mode) && styles.CaptionVisible} ${isCurrent(props.progress) && styles.CaptionCurrent} ${isSaved() && styles.CaptionSaved}`}
      dangerouslySetInnerHTML={{ __html: props.text }}
      onClick={onClick} />
  )
}