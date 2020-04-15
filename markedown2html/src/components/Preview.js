import React from 'react';
import {StyledPreview, StyledPreviewWrapper} from "./styledPreviewComponents";

export const Preview = (props) => {
  return (
    <StyledPreviewWrapper>
      <StyledPreview dangerouslySetInnerHTML={{__html: props.renderedContent}} />
    </ StyledPreviewWrapper>
  );
}
