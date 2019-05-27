export function buildTreeNodes(treeData) {
  treeData.forEach(node => {
    if (node.folder) {
      node.icon = node.isExpanded ? "folder-open" : "folder-close";
    } else {
      node.icon = "document";
    }

    if (node.childNodes) {
      node.childNodes = buildTreeNodes(node.childNodes);
    }
  });

  return treeData;
}

export function buildListNodes(listData) {
  listData.forEach(node => {
    node.icon = "document";
  });

  return listData;
}
