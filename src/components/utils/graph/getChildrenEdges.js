export const getChildrenEdges = (nodes, edges) => {
  const nodeIds = nodes.map(node => node.id);

  return edges.filter(
    edge => nodeIds.includes(edge.from) || nodeIds.includes(edge.to)
  );
};
