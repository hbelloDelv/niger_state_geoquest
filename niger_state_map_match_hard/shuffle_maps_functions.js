// Shuffle the divs
 const dragDivs = document.querySelectorAll('.dragable-div');

 export function shuffleMaps() {
    const parent = dragDivs[0].parentNode;
    for (let i = dragDivs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        parent.insertBefore(dragDivs[j], dragDivs[i]);
    }
}


