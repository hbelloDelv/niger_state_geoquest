
// //////////// GOOD JOB MODAL FUNCTION ////////////////

const goodJobtModal = document.querySelector('.goodJob-modal')
function handlegoodJobModal() {
    goodJobtModal.showModal()
}

const closeModal = document.querySelector('#btn-close')
closeModal.addEventListener('click', ()=>{
    goodJobtModal.close()
})


const playMedium = document.querySelector('#btn-medium')
playMedium.addEventListener('click', ()=>{
    location.href = '../niger_state_map_match_hard/index.html'
})

const restartGame = document.querySelector('#btn-restart')
restartGame.addEventListener('click', ()=>{
    location.reload()  
})



// //////////// PERFECT MODAL FUNCTION ////////////////
const perfectRuntModal = document.querySelector('.perfectRun-modal')
function handlePefectRunModal() {
    perfectRuntModal.showModal()
}

const closePerfectRunModal = document.querySelector('.btn-close')
closePerfectRunModal.addEventListener('click', ()=>{
    perfectRuntModal.close()
})


const playMediumPF = document.querySelector('.btn-medium')
playMediumPF.addEventListener('click', ()=>{
    location.href = '../niger_state_map_match_hard/index.html'
})

const restartGamePF = document.querySelector('.btn-restart')
restartGamePF.addEventListener('click', ()=>{
    location.reload()  
})



// //////////// GAME OVER MODAL FUNCTION ////////////////
const gameOverModal = document.querySelector('.game-over-modal')
function handleGameOverModal() {
    gameOverModal.showModal()
}

const restartGameOver  = document.querySelector('.btn-restart-game-over')
restartGameOver.addEventListener('click', ()=>{
    location.reload()  
})


const closeGameOverModal= document.querySelector('.btn-close-game-over')
closeGameOverModal.addEventListener('click', ()=>{
    gameOverModal.close()
})



export{handlegoodJobModal, handlePefectRunModal, handleGameOverModal}