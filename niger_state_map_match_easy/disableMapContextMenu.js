

 export const disablecontextMenu = window.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation();
    return false;
    
}