import React from 'react'
import styles from './Caption.module.scss'

export default function Caption(props) {
  return(
    <div className={styles.Caption}>
      {props.text}
    </div>
  )
}