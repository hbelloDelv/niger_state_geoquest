 const dragDivs = document.querySelectorAll('.dragable-div');

// REMOVING THE MAP FROM THE DOM AFTER MATCH
 function removeSingleNode(nodeList, index) {
    // Check if the index is within bounds
    if (index >= 0 && index < nodeList.length) {
        // Get the parent node of the NodeList
        const parentNode = nodeList[index].parentNode;

        // Remove the specific child node
        parentNode.removeChild(nodeList[index]);

        console.log("Node removed successfully!");
    } else {
        console.error("Invalid index. Please provide a valid index within the NodeList bounds.");
    }
}



export {dragDivs, removeSingleNode};