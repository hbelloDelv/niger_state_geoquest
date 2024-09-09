import {cheerMe} from './cheer_me.js';
import {totalMatch, totalUnMatch} from './match_unmatch_scores.js';
import {addConfetti} from './splashConfetti.js'
import {replaceDiv} from './replace_map_final.js';
import {disableDragMap, enableDisableDragMap} from './enable_disableTile.js'


import { handlegoodJobModal, handlePefectRunModal, handleGameOverModal} from './modals_handler.js';

//////////////// TESTING /////////////////////////
import {statesRemaining} from './match_unmatch_scores.js';

// console.log(statesRemaining)



let startButton = document.getElementById("startBtn")
let enableStartButton = false
let timeLeft; // 5 minutes in seconds
let countdownInterval;
let minutes
let seconds 
let display;
let elapsedMinutes 
let elapsedSeconds





// ///////////// THE COUNTDOWN TIMER FUNCTION /////////////////////
function startCountdown() {
   display = document.getElementById("show-time-div");
   timeLeft = 300;
   enableStartButton = true;

  let startTime = Date.now(); 

   countdownInterval = setInterval(function() {
      let now = Date.now();
      let elapsedTime = Math.floor((now - startTime) / 1000); // Elapsed time in seconds

      elapsedMinutes = Math.floor(elapsedTime / 60);
      elapsedSeconds = elapsedTime % 60;
      elapsedMinutes = elapsedMinutes < 10 ? '0' + elapsedMinutes : elapsedMinutes;
      elapsedSeconds = elapsedSeconds < 10 ? '0' + elapsedSeconds : elapsedSeconds;

       minutes = Math.floor(timeLeft / 60);
       seconds = timeLeft % 60;

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;


      // startButton.disabled = enableStartButton;

      if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          display.textContent = '00:00';
      } else {
          timeLeft--;
          // Additional functions such as score checking or alerts can be called here
           checkScore(); 
           alertTiming();
      }
  }, 1000);
}



const displayStartDialog = document.querySelector('.start-game')
const startGameButton = document.querySelector('#start')


//The bellow function displays the modal when the game load
window.addEventListener('load', function () {
    displayStartDialog.showModal()
})


startGameButton.addEventListener('click', function () {
  startCountdown();
  enableDisableDragMap()
  displayStartDialog.close()
})


// ///////////// NOT IN USE ANY MORE ///////////////////////
// startButton.addEventListener('click', function() {
//   startCountdown();
//   enableDisableDragMap()
// })


/////////// FINAL SCORE AND RESULT ////////////////////////
function checkScore() {
  if(totalMatch === 25 && totalUnMatch === 0 && timeLeft > 0){
        clearInterval(countdownInterval)
        addConfetti()
        cheerMe.finishingDrum()   
        setTimeout(()=>{
            replaceDiv()
        },2600)
        setTimeout(()=>{
          const showTimeFinishPF= document.querySelector('#show-state-remaining')
          showTimeFinishPF.textContent = elapsedMinutes + ':' + elapsedSeconds;
          handlePefectRunModal()
        },4200)
        
      }else if(totalMatch === 25 && totalUnMatch > 0 && timeLeft > 0){
        clearInterval(countdownInterval)
        addConfetti()
        cheerMe.finishingDrum()   
        setTimeout(()=>{
          const showTimeFinishGoodJob = document.querySelector('.show-state-remaining')
          showTimeFinishGoodJob.textContent = elapsedMinutes + ':' + elapsedSeconds;
          handlegoodJobModal()
        },2000)
        
      }else if(totalMatch !== 25 && timeLeft === 1){
        setTimeout(()=>{
          let showStateRemaining = document.querySelector('.stateCount')
              showStateRemaining.textContent = statesRemaining
            handleGameOverModal()
        },1000)
      startButton.disabled = enableStartButton
      }
      // NEWLY ADDED on 30th APRIL 2024 /////
        else if(totalUnMatch >= 8){
        let showStateRemaining = document.querySelector('.stateCount')
        showStateRemaining.textContent = statesRemaining
        handleGameOverModal()
        clearInterval(countdownInterval)
      }

  }


  // Alert Timing 
  let flashTime 
  let timeLabel

function alertTiming() {
  if(timeLeft === 30){
    cheerMe.warning()
    display.style.backgroundColor = 'red'    
  }else if(timeLeft === 119){
    cheerMe.warning()
    flashTime = document.querySelector('.show-time-remaining')
    timeLabel = document.querySelector('.time-remaining-label')
    flashTime.innerHTML =  minutes + ':' + seconds
    timeLabel.innerHTML = "Mins remaining"
    display.style.backgroundColor = '#ff9a3c'    
     hideTImeRemaining()
  }
  else if(timeLeft === 10){
    cheerMe.alertEndofGame()
  }
  return false
}



function hideTImeRemaining() {
  setTimeout(()=>{
    flashTime.classList.add("hide-show-time")
    timeLabel.classList.add("hide-show-time")
  },6000)
}



function handleUnmatch() {
  if(totalUnMatch >=10){

  }
}




window.addEventListener('load', disableDragMap)



// Export  the startCountdown function
export { startCountdown};









