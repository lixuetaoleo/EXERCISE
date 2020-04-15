import React from 'react';

const previewStyle = {
  overflow: 'auto',
  maxWidth:'50%',
  boxSizing:'border-box',
  marginLeft:10
};

export const Preview = function (props) {
  return (
    <div id='preview' style={previewStyle} dangerouslySetInnerHTML={{__html: props.renderedContent}}></div>
  );
}