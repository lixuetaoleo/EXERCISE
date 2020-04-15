import styled from 'styled-components';

export const EditorWrapper = styled.div`
  display: flex;
`;

export const StyledTextArea = styled.textarea`
  display: block;
  width: 80%;
  resize: vertical;
  margin: 0 auto;
  min-height: 100%;
`;

export const StyledToolBar = styled.div`
  width: 82%;
  margin: 0 auto;
`;

export const StyledEditor = styled.div`

  width: 40%;
  margin-top: 2%;
`;

export const Icon = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-left: 3px;
  margin-right: 3px;
  width: 18px;
  height: 18px;
  &:hover{
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }
`;