import React, { lazy } from "react";
import { MantineProvider, Text } from '@mantine/core';
import styled from "styled-components";
import { Tools } from "./components/Editor/LiveEditor/Tools";
// import useFile from "hooks/useFile";
import useJson from "./components/hooks/useJson";
import { EditorWrapper } from "./components/layouts/EditorWrapper";
import useFile from "./components/hooks/useFile";

const Panes = lazy(() => import("./components/Editor/Panes"));

export const StyledPageWrapper = styled.div`
  height: calc(100vh - 27px);
  width: 100%;

  @media only screen and (max-width: 320px) {
    height: 100vh;
  }
`;

export const StyledEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function App() {
  const checkEditorSession = useFile(state => state.checkEditorSession);
  const loading = useJson(state => state.loading);
  console.log({ loading })

  React.useEffect(() => {
    checkEditorSession();
  }, []);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <EditorWrapper>
        <StyledEditorWrapper>
          <StyledPageWrapper>
            <Tools />
            <StyledEditorWrapper>
              <Panes />
            </StyledEditorWrapper>
          </StyledPageWrapper>
        </StyledEditorWrapper>
      </EditorWrapper>
    </MantineProvider>
  );
}

export default App;
