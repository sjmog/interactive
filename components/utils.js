const isEndOfSentence = (string) => {
  const SENTENCE_ENDERS = ['.', '!', '?']
  const lastCharacter = string.charAt(string.length - 1);

  return SENTENCE_ENDERS.includes(lastCharacter)
}

const xmlToSentences = (xmls) => {
  const sentences = [];
  let unfinishedSentence = null;

  for(let i = 0; i < xmls.length; i++) {
    currentXml = xmls[i];

    if(isEndOfSentence(currentXml._)) {
      if(unfinishedSentence) {
        sentences.push({
          text: `${ unfinishedSentence._ } ${ currentXml._ }`,
          start: parseFloat(unfinishedSentence.$.start),
          dur: parseFloat(unfinishedSentence.$.dur) + parseFloat(currentXml.$.dur)
        })

        unfinishedSentence = null;
      } else {
        sentences.push({
          text: currentXml._,
          start: parseFloat(currentXml.$.start),
          dur: parseFloat(currentXml.$.dur)
        })
      }
    } else {
      if(unfinishedSentence) {
        unfinishedSentence._ += ` ${currentXml._}`
        unfinishedSentence.$.dur += parseFloat(currentXml.$.dur)
      } else {
        unfinishedSentence = {
          "_": currentXml._,
          $: {
            start: parseFloat(currentXml.$.start),
            dur:   parseFloat(currentXml.$.dur)
          }
        }
      }
    }
  }

  return sentences;
}

module.exports = { xmlToSentences: xmlToSentences };