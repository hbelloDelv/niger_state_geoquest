// replace the map with this when game finish


export function replaceDiv() {
    // Create a new div
    let newDiv = document.createElement('div');

     // Add CSS styles to center newDiv
     newDiv.style.display = 'flex';
     newDiv.style.justifyContent = 'center';
     newDiv.style.alignItems = 'center';
    //  newDiv.style.backgroundColor = 'red'

    var mapPhoto = document.createElement('img');
    mapPhoto.src = './nigMapPhoto.png'
    mapPhoto.width = '800'; // Set the width here
    mapPhoto.height = '550'; // Set the height here
    newDiv.appendChild(mapPhoto)
    

     const leftSection = document.getElementById('left-section')
     const mapDiv = leftSection.children[2]
     console.log(mapDiv)
     leftSection.replaceChild(newDiv, mapDiv)
    
}

// replaceDiv()