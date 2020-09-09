import React, { useState, useEffect } from 'react'
import Caption from './Caption'
import { parseString } from 'xml2js'
import styles from './Script.module.scss'

export default function Script(props) {
  const NULL_CAPTION = {
    "start": 0,
    "dur": 0,
    "text": "Loading"
  }

  const [captions, setCaptions] = useState([NULL_CAPTION]);

  const captionComponents = () => {
    return captions.map((caption, index) => {
      return(<Caption 
                key={`caption-${index}`} 
                text={caption._} 
                {...caption.$} />)
    })
  }

  useEffect(() => {
    fetch(`https://video.google.com/timedtext?lang=en&v=${props.id}`, { method: 'POST' })
      .then(res => res.text())
      .then(
            xml => parseString(xml, (err, captions) => setCaptions(captions.transcript.text)),
            error  => console.log(error.message)
          );
  }, [])

  return(
    <article className={`${styles.Script} ${props.className}`}>
      { captionComponents() }
    </article>
  );
}