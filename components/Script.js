import React, { useState, useEffect } from 'react'

export default function Script(props) {
  const [text, setText] = useState("Loading")

  useEffect(() => {
    fetch(`https://video.google.com/timedtext?lang=en&v=${props.id}`, { method: 'POST' })
      .then(res => res.text())
      .then(
            text => setText(text),
            error  => console.log(error.message)
          );
  }, [])

  return(
    <article className={props.className} dangerouslySetInnerHTML={ { __html: text } } />
  );
}