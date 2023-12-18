import React from "react";
import styled from "styled-components";
import { MonacoEditor } from "../MonacoEditor";

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
`;

export const JsonEditor = () => {
  return (
    <StyledEditorWrapper>
      <MonacoEditor />
    </StyledEditorWrapper>
  );
};

export default JsonEditor;
