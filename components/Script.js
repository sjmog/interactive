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
    fetch(`http://video.google.com/timedtext?type=list&v=${ props.id }`)
      .then(response => response.text())
      .then(xml => {
        if(!xml) return props.onReady(false);
        parseString(xml, (err, res) => {
          const trackId = res.transcript_list.track[0].$.id;
          const trackLang = res.transcript_list.track[0].$.lang_code;

          fetch(`http://video.google.com/timedtext?type=track&v=${props.id}&id=${trackId}&lang=${trackLang}`)
            .then(response => response.text())
            .then(xml => { 
              parseString(xml, (err, res) => {
                if(!xml) return setCaptions([NO_CAPTION]);
                setCaptions(res.transcript.text);
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