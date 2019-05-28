export function buildTreeNodes(treeData) {
  treeData.forEach(node => {
    if (node.folder) {
      node.icon = node.isExpanded ? "folder-open" : "folder-close";
    }

    if (node.childNodes) {
      node.childNodes = buildTreeNodes(node.childNodes);
    }
  });

  return treeData;
}