import React from "react";
import styled from "styled-components";
import { Graph } from "../Graph";

const StyledLiveEditor = styled.div`
  position: relative;
  height: 100%;
`;

const LiveEditor = () => {
  return (
    <StyledLiveEditor>
      <Graph />
    </StyledLiveEditor>
  );
};

export default LiveEditor;
