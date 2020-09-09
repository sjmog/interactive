import React from 'react'
import styles from './Instructions.module.scss'

export default function Instructions(props) {
  return(
    <div className={styles.Instructions}>
      <div className={styles.Instruction}>
        <figure>
          <img src="s-key.png" />
        </figure>

        <figcaption>
          Mark the current point.
        </figcaption>
      </div>

      <div className={styles.Instruction}>
        <figure>
          <img src="d-key.png" />
        </figure>

        <figcaption>
          Review your marks.
        </figcaption>
      </div>
    </div>
  )
}