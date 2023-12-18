import React, { lazy } from "react";
// import { Edge } from "reaflow";

const {Edge} = lazy(() => import("reaflow"));


const CustomEdgeWrapper = (props) => {
  return <Edge containerClassName={`edge-${props.id}`} {...props} />;
};

export const CustomEdge = React.memo(CustomEdgeWrapper);
