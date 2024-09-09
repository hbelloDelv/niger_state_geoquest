
let totalMatch = 0;
let totalUnMatch = 0;
// let consecutiveUnMatch = 0;
// consecutiveUnMatch++
// consecutiveUnMatch = 0 

let statesRemaining = 25

function match(){
    totalMatch++  
}


function unMatch(){
    totalUnMatch++
}



function countStatesRemaing() {
     statesRemaining--
}

// console.log(statesRemaining)



export {match, unMatch, totalMatch, totalUnMatch, countStatesRemaing, statesRemaining};