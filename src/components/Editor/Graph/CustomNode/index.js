import React, { lazy } from "react";
import useGraph from "../../../hooks/useGraph";
import useModal from "../../../hooks/useModal";
import { ObjectNode } from "./ObjectNode";
import { TextNode } from "./TextNode";
// import { Node } from "reaflow";

const {Node} = lazy(() => import("reaflow"));

const rootProps = {
  rx: 50,
  ry: 50,
};

const CustomNodeWrapper = (nodeProps) => {
  const data = nodeProps.properties.data;
  const setSelectedNode = useGraph(state => state.setSelectedNode);
  const setVisible = useModal(state => state.setVisible);

  const handleNodeClick = React.useCallback(
    (_, data) => {
      if (setSelectedNode) setSelectedNode(data);
      setVisible("node")(true);
    },
    [setSelectedNode, setVisible]
  );

  return (
    <Node
      {...nodeProps}
      {...(data?.isEmpty && rootProps)}
      onClick={handleNodeClick}
      animated={false}
      label={null}
    >
      {({ node, x, y }) => {
        if (Array.isArray(nodeProps.properties.text)) {
          if (data?.isEmpty) return null;
          return <ObjectNode node={node} x={x} y={y} />;
        }

        return <TextNode node={node} hasCollapse={!!data?.childrenCount} x={x} y={y} />;
      }}
    </Node>
  );
};

export const CustomNode = React.memo(CustomNodeWrapper);
