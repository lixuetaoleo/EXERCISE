import React from 'react';

const editorWrapperStyle = {
  float:'left',
  width:'40%',
  boxSizing:'border-box',
  marginRight:10,
};

const editorStyle = {
  maxWidth:'100%',
  backgroundColor:'aqua',
  resize:'vertical'
}

export const Editor = function (props) {
  return (
    <div className='editorwrapper' style={editorWrapperStyle}>
      <textarea id='editor' style={editorStyle} onChange={props.handleInput} type='text'>{props.inputContent}</textarea>
    </div>
  );
};