import React from 'react'
import styles from './Instructions.module.scss'

export default function Instructions(props) {
  return(
    <div className={styles.Instructions}>
      <p>Press "S" to make a note of the current content.</p>
      <p>Press "R" to review all the notes you made.</p>
      <p>Click on a caption to go to that point in the video.</p>
    </div>
  )
}