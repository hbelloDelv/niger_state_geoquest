/////////////// DRAGMAP DISABLE and ENABLE FUNCTIONS ///////////////////
const dragMapTile = document.querySelector('#right-section')
const eachMapTile = dragMapTile.children


let isDragDisabled = false; // Flag to track drag state

const disableDragMap = () => {
  isDragDisabled = true;

  Array.from(eachMapTile).forEach(item => {
    let dragMap = item.children;

    for (let index = 0; index < dragMap.length; index++) {
      const element = dragMap[index];
      element.addEventListener('dragstart', (e) => {
        if (isDragDisabled) {
          e.preventDefault();
        }
      });
    }
  });
};



const enableDisableDragMap = () => {
  isDragDisabled = false;

  Array.from(eachMapTile).forEach(item => {
    let dragMap = item.children;

    for (let index = 0; index < dragMap.length; index++) {
      const element = dragMap[index];
      element.addEventListener('dragstart', (e) => {
        if (isDragDisabled) {
          e.preventDefault();
        }
      });
    }
  });
};




export {disableDragMap, enableDisableDragMap}