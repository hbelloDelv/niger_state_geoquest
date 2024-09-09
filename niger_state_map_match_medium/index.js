import{
    allStatesTiles, eachStateMap,


    AgaieLGAId, AgwaraLGAId,   BidaLGAId,  BorguLGAId,  BossoLGAId, 
    ChanchagaLGAId,  EdatiLGAId,  GbakoLGAId, GuraraLGAId, KatchaLGAId, 
    KontagoraLGAId,  LapaiLGAId,  LavunLGAId, MagamaLGAId, MarigaLGAId, 
    MasheguLGAId,  MokwaLGAId,  MunyaLGAId, 
    PaikoroLGAId,   RafiLGAId,  RijauLGAId, 
    ShiroroLGAId, SulejaLGAId,   TafaLGAId, 
    WushishiLGAId, 

}  from './each_SVG_State_ID.js'

import {match, unMatch, totalMatch, totalUnMatch, countStatesRemaing, statesRemaining} from './match_unmatch_scores.js';

import {startCountdown} from './Timer.js'
import {cheerMe} from './cheer_me.js'
import {dragDivs, removeSingleNode} from './remove_map_when_match.js'
import {shuffleMaps} from './shuffle_maps_functions.js';
import {ResetButton} from './resetMap.js'

let countNumberSates = document.querySelector('.number-of-states')
countNumberSates.innerHTML = statesRemaining




// PLEASE ACTIVE THIS MODULE BEFOR DEPLOYMENT
// import {disablecontextMenu} from './disableMapContextMenu.js'


// prevent default state of not allowing element to be over it
allStatesTiles.forEach(state => {
    state.addEventListener('dragover', dragOver);
})


// Retrive the id from the drag map
eachStateMap.forEach(state => {    
    state.addEventListener('dragstart', (e)=>{      
        e.dataTransfer.setData("text/plain", state.id)
 })
})

// This is added to each SVG element
function dragOver(event) {
    event.preventDefault() 
    
}

// EACH STATE COMPARE IT'S ID TO THE DRAG MAP
// AddingEvent to the SVG ID FOR EACH STATE
// The using the SVG name for each state to compare the data trasnfer from the 
// Local government tiles
AgaieLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const AgaieLGAName = AgaieLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === AgaieLGAName){
                    AgaieLGAId.classList.add('agai_color')
                    match()
                    cheerMe.stateOneCheers()
                    const matchDiv = document.getElementById('match')
                      // update match score
                    matchDiv.innerText = totalMatch;
                    // disableAbiaState()
                    removeSingleNode(dragDivs, 0);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateOneUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
        
})



AgwaraLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const AgwaraLGAName = AgwaraLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === AgwaraLGAName){
                    AgwaraLGAId.classList.add('agwara_color')
                    match()
                    cheerMe.stateTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAujaState()
                    removeSingleNode(dragDivs, 1);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


BidaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const BidaLGAName = BidaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === BidaLGAName){
                    BidaLGAId.classList.add('bida_color')
                    match()
                    cheerMe.stateThreeCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAdamawaState()
                    removeSingleNode(dragDivs, 2);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateThreeUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})



// TO BE  REVISTED
BorguLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const BorguLGAName = BorguLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === BorguLGAName){
                BorguLGAId.classList.add('borgu_color')
                    match()
                    cheerMe.stateFourCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    // disableAkwa_IbomState()
                    removeSingleNode(dragDivs, 3);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateFourUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})

// TO BE REVISISTED
BossoLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const BossoLGAName = BossoLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === BossoLGAName){
                    BossoLGAId.classList.add('bosso_color')
                    match()
                    cheerMe.stateFiveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 4);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateFiveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})

// To be revisted - cant find it on a map
ChanchagaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ChanchagaLGAName = ChanchagaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ChanchagaLGAName){
                    ChanchagaLGAId.classList.add('chanchaga_color')
                    match()
                    cheerMe.stateSixCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 5);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateSixUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


EdatiLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const EdatiLGAName = EdatiLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === EdatiLGAName){
                    EdatiLGAId.classList.add('edati_color')
                    match()
                    cheerMe.stateSevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 6);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateSevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})



GbakoLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const GbakoLGAName = GbakoLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === GbakoLGAName){
                    GbakoLGAId.classList.add('gbako_color')
                    match()
                    cheerMe.stateEightCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 7);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateEightUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})




GuraraLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const GuraraLGAName = GuraraLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === GuraraLGAName){
                    GuraraLGAId.classList.add('gurara_color')
                    match()
                    cheerMe.stateNineCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 8);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateNineUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


KatchaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const KatachaLGAName = KatchaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === KatachaLGAName){
                    KatchaLGAId.classList.add('katcha_color')
                    match()
                    cheerMe.stateTenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 9);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


KontagoraLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const KontagoraLGAName = KontagoraLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === KontagoraLGAName){
                    KontagoraLGAId.classList.add('kontagora_color')
                    match()
                    cheerMe.stateElevenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 10);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateElevenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


LapaiLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const LapaiLGAName = LapaiLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === LapaiLGAName){
                    LapaiLGAId.classList.add('lapai_color')
                    match()
                    cheerMe.stateTwelveCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 11);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwelveUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


LavunLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const LavunLGAName = LavunLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === LavunLGAName){
                    LavunLGAId.classList.add('lavun_color')
                    match()
                    cheerMe.stateThirteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 12);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateThirteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


MagamaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const MagamaLGAName = MagamaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === MagamaLGAName){
                    MagamaLGAId.classList.add('magama_color')
                    match()
                    cheerMe.stateFourteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 13);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateFifteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


MarigaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const MarigaLGAName = MarigaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === MarigaLGAName){
                    MarigaLGAId.classList.add('mariga_color')
                    match()
                    cheerMe.stateFifteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 14);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateFifteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


MasheguLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const  MasheguLGAName = MasheguLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === MasheguLGAName){
                    MasheguLGAId.classList.add('mashegu_color')
                    match()
                    cheerMe.stateSixteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 15);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateSixteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})



MokwaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const MokwaLGAName = MokwaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === MokwaLGAName){
                    MokwaLGAId.classList.add('mokwa_color')
                    match()
                    cheerMe.stateSeventeenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 16);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateSeventeenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


MunyaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const MunyaLGAName = MunyaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === MunyaLGAName){
                    MunyaLGAId.classList.add('munya_color')
                    match()
                    cheerMe.stateEighteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 17);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateEighteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch
        }
})


PaikoroLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const PaikoroLGAName = PaikoroLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === PaikoroLGAName){
                    PaikoroLGAId.classList.add('paikoro_color')
                    match()
                    cheerMe.stateNineteenCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 18);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateNineteenUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


RafiLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const RafiLGAName = RafiLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === RafiLGAName){
                    RafiLGAId.classList.add('rafi_color')
                    match()
                    cheerMe.stateTweentyCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 19);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


RijauLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const RijauLGAName = RijauLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === RijauLGAName){
                    RijauLGAId.classList.add('rijau_color')
                    match()
                    cheerMe.stateTweentyOneCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 20);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyOneUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch  
        }
})


ShiroroLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const ShiroroLGAName = ShiroroLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === ShiroroLGAName){
                    ShiroroLGAId.classList.add('shiroro_color')
                    match()
                    cheerMe.stateTweentyTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch
                    removeSingleNode(dragDivs, 21);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch;
        }
})



SulejaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const SulejaLGAName = SulejaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === SulejaLGAName){
                    SulejaLGAId.classList.add('suleja_color')
                    match()
                    cheerMe.stateTweentyThreeCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 22);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyThreeUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})


TafaLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const TafaLGAName = TafaLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === TafaLGAName){
                    TafaLGAId.classList.add('tafa_color')
                    match()
                    cheerMe.stateTweentyFourCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch;
                    removeSingleNode(dragDivs, 23);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyFourUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch 
        }
})



WushishiLGAId.addEventListener('drop', (e)=>{
    e.preventDefault()
    const WushishiName = WushishiLGAId.getAttribute('name')
    const data = e.dataTransfer.getData("text/plain")
    if(data === WushishiName){
                    WushishiLGAId.classList.add('wushishi_color')
                    match()
                    cheerMe.stateTweentyTwoCheers()
                    const matchDiv = document.getElementById('match')
                    matchDiv.innerText = totalMatch
                    removeSingleNode(dragDivs, 24);
                    countStatesRemaing()
                    countNumberSates.innerHTML = statesRemaining
                }
                else{
                    unMatch()
                    cheerMe.stateTwentyTwoUnCheers()
                    const unMatchDiv = document.getElementById('un-match')
                    unMatchDiv.innerText = totalUnMatch;
        }
})





export {countNumberSates}
// The index file must load before the maps is reshufle
shuffleMaps()
