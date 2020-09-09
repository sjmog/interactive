import React, { useState, useEffect } from 'react'
import Caption from './Caption'
import { parseString } from 'xml2js'
import styles from './Script.module.scss'

export default function Script(props) {
  const NULL_CAPTION = {
    "_": "Loading",
    "$": {
      "start": 0,
      "dur": 0
    }
  }

  const NO_CAPTION = {
    "_": "No captions available.",
    "$": {
      "start": 0,
      "dur": 0
    }
  }

  const [captions, setCaptions] = useState([NULL_CAPTION]);

  const captionComponents = () => {
    return captions.map((caption, index) => {
      return(<Caption 
                key={`caption-${index}`} 
                text={caption._}
                progress={props.progress}
                saved={props.saved}
                start={parseFloat(caption.$.start)}
                mode={props.mode}
                end={parseFloat(caption.$.start) + parseFloat(caption.$.dur)} />)
    })
  }

  useEffect(() => {
    fetch(`https://video.google.com/timedtext?lang=en&v=${props.id}`, { method: 'POST' })
      .then(res => res.text())
      .then(
            xml => {
              if(!xml) return setCaptions([NO_CAPTION]);
              parseString(xml, (err, captions) => setCaptions(captions.transcript.text));
            },
            error  => console.log(error.message)
          );
  }, [props.id])

  useEffect(() => {
  }, [props.progress, props.saved])

  return(
    <article className={`${styles.Script} ${styles["Script-" + props.mode]} ${props.className}`}>
      { captionComponents() }
    </article>
  );
}