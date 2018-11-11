import React from 'react';

const Editor = (props) => {
  return (
    <textarea defaultValue={props.default} onChange={props.updateText} id="editor"></textarea>
  )
}

export default Editor;
