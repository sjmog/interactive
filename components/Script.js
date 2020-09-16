import React, { useState, useEffect } from 'react'
import Caption from './Caption'
import { parseString } from 'xml2js'
import { xmlToSentences } from './utils'
import styles from './Script.module.scss'

export default function Script(props) {
  const NULL_CAPTION = {
    "text": "Loading",
    "start": 0,
    "dur": 0
  }

  const NO_CAPTION = {
    "text": "No captions available.",
    "start": 0,
    "dur": 0
  }

  const [captions, setCaptions] = useState([NULL_CAPTION]);

  const captionComponents = () => {
    return captions.map((caption, index) => {
      return(<Caption 
                key={`caption-${index}`} 
                text={caption.text}
                progress={props.progress}
                saved={props.saved}
                start={caption.start}
                mode={props.mode}
                end={caption.start + caption.dur}
                onClick={props.onCaptionClick} />)
    })
  }

  useEffect(() => {
    fetch(`https://video.google.com/timedtext?type=list&v=${ props.id }`)
      .then(response => response.text())
      .then(xml => {
        if(!xml) return props.onReady(false);
        parseString(xml, (err, res) => {
          // Just get the English track for now
          // id param isn't required, but lang param is
          fetch(`https://video.google.com/timedtext?type=track&v=${props.id}&lang=en`)
            .then(response => response.text())
            .then(xml => { 
              parseString(xml, (err, res) => {
                if(!xml) return setCaptions([NO_CAPTION]);
                setCaptions(xmlToSentences(res.transcript.text));
              })
            })
        })
      })
  }, [props.id])

  useEffect(() => {
  }, [props.progress, props.saved])

  return(
    <article className={`${styles.Script} ${styles["Script-" + props.mode]} ${props.className}`}>
      { captionComponents() }
    </article>
  );
}