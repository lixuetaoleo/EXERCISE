import React from 'react';
import {StyledPreview} from "./styledPreviewComponents";

export const Preview = (props) => {
  return (
    <StyledPreview dangerouslySetInnerHTML={{__html: props.renderedContent}} />
  );
}