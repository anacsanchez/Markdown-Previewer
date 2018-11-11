import React from 'react';

const Preview = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: props.preview }} />
  )
}

export default Preview;
