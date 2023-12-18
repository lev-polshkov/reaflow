export const searchQuery = (param) => {
  return document.querySelectorAll(param);
};

export const cleanupHighlight = () => {
  const nodes = document.querySelectorAll("foreignObject.searched, .highlight");

  nodes.forEach(node => {
    node.classList.remove("highlight", "searched");
  });
};

export const highlightMatchedNodes = (nodes, selectedNode) => {
  nodes.forEach(node => {
    const foreignObject = node.parentElement?.closest("foreignObject");

    if (foreignObject) {
      foreignObject.classList.add("searched");
    }
  });

  nodes[selectedNode].classList.add("highlight");
};
