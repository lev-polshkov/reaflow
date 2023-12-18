
export const getOutgoers = (
  nodeId,
  nodes,
  edges,
  parent = []
) => {
  const outgoerNodes = [];
  const matchingNodes = [];

  if (parent.includes(nodeId)) {
    const initialParentNode = nodes.find(n => n.id === nodeId);

    if (initialParentNode) outgoerNodes.push(initialParentNode);
  }

  const findOutgoers = (currentNodeId) => {
    const outgoerIds = edges.filter(e => e.from === currentNodeId).map(e => e.to);
    const nodeList = nodes.filter(n => {
      if (parent.includes(n.id) && !matchingNodes.includes(n.id)) matchingNodes.push(n.id);
      return outgoerIds.includes(n.id) && !parent.includes(n.id);
    });

    outgoerNodes.push(...nodeList);
    nodeList.forEach(node => findOutgoers(node.id));
  };

  findOutgoers(nodeId);
  return [outgoerNodes, matchingNodes];
};
