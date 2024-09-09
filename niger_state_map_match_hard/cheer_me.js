// The below code is responsible for match and unmatch reaction
const cheerMeDiv = document.getElementById('cheer-me');
const emojiDiv= document.getElementById('emoji-reaction');


export const cheerMe = {
    state_one: 'Fantastic!',
    state_two: 'Great job!',
    state_three: 'Excellent!',
    state_four: 'Perfect match!',
    state_five: 'Wonderful!',
    state_six: 'Awesome!',
    state_seven: 'Terrific!',
    state_eight: 'Superb!',
    state_nine: 'Outstanding!',
    state_ten: 'You nailed it!',
    state_eleven: 'Spot on!',
    state_twelve: 'Bravo!',
    state_thirteen: 'Amazing!',
    state_fourteen: 'Well done!',
    state_fifteen: 'Impressive!',
    state_sixteen: 'Good work!',
    state_seventeen: 'Nice one!',
    state_eighteen: 'Stellar!',
    state_nineteen: 'Way to go!',
    state_twenty: 'You\'re a pro!',
    state_twenty_one: 'Keep it up!',
    state_twenty_two: 'Genius!',
    state_twenty_three: 'You rock!',
    state_twenty_four: 'Top-notch!',
    state_twenty_five: 'Incredible!',
    state_twenty_six: 'Marvelous!',
    state_twenty_seven: 'Splendid!',
    state_twenty_eight: 'Right on target!',
    state_twenty_nine: 'Aced it!',
    state_twenty_nine: 'Flawless!',
    state_twenty_nine: 'You\'re killing it!',
    state_thirty: 'A perfect match!',
    state_thirty_one: 'You\'re on fire!',
    state_thirty_two: 'Exceptional!',
    state_thirty_three: 'Unbelievable!',
    state_thirty_four: 'Spectacular!',
    state_thirty_five: 'Are you a Jamitan!',
    state_thirty_six: 'Perfect fit',
    state_thirty_seven: 'Magneficient!',


    //Uncheer phrases 
    uncheer_one: 'Nice try!',
    uncheer_two: 'Keep going!',
    uncheer_three: 'Dont give up!',
    uncheer_four: 'Learning curve!',
    uncheer_five: 'Almost!',
    uncheer_six: 'Persevere!',
    uncheer_seven: 'Good effort!',
    uncheer_eight: 'Don\'t give up!',
    uncheer_nine: 'Great effort!',
    uncheer_ten: 'Progress in the making!',
    uncheer_eleven: 'You\'ll get it!',
    uncheer_twelve: 'Hang in there!',
    uncheer_thirteen: 'Success is a match away!',
    uncheer_fourteen: 'Keep that spirit!',
    uncheer_fifteen: 'Learning is fun!',
    uncheer_sixteen: 'You\'re on a journey!',
    uncheer_seventeen: 'Learning experience!',
    uncheer_eigthteen: 'Keep pushing!',
    uncheer_nineteen: 'Try another match!',
    uncheer_twenty: 'Keep your head up!',
    uncheer_twenty_one: 'Your effort matters!',
    uncheer_twenty_two: 'Keep aiming high!',
    uncheer_twenty_three: 'Keep that spirit!',
    uncheer_twenty_four: 'Stay determined!',
    uncheer_twenty_five: 'Positive energy!',
    uncheer_twenty_six: 'Stay focus!',
    uncheer_twenty_seven: 'You can do it!',
    uncheer_twenty_eight: 'Effort matters!',
    uncheer_twenty_nine: 'Still a step!',
    uncheer_thirty: 'Push on!',
    uncheer_thirty_one: 'Good going!',
    uncheer_thirty_two: 'Try harder!',
    uncheer_thirty_three: 'Almost there!',
    uncheer_thirty_four: 'Nice attempt!',
    uncheer_thirty_five: 'Well played!',
    uncheer_thirty_six: 'Impressive!',
    uncheer_thirty_seven: 'You\'re close!',

    //Impressions
    smileEmoji: '&#x1F60A;',
    sadEmoji: '&#x1F61E;',

    //sound effects
    winsound: './sound/winsound.mp3',
    retrysound: './sound/retrysound.mp3',
    rollDrum: './sound/finishingDrum.mp3',
    warning_sound: './sound/warningSound.mp3',
    alertTillEndSound: './sound/10sec_countdown.mp3',
    time_up_Sound: './sound/time_up_out.mp3',


    stateOneCheers: function () {
        cheerMeDiv.innerText = this.state_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTwoCheers: function () {
        cheerMeDiv.innerText = this.state_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThreeCheers: function () {
        cheerMeDiv.innerText = this.state_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFourCheers: function () {
        cheerMeDiv.innerText = this.state_four
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFiveCheers: function () {
        cheerMeDiv.innerText = this.state_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSixCheers: function () {
        cheerMeDiv.innerText = this.state_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSevenCheers: function () {
        cheerMeDiv.innerText = this.state_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateEightCheers: function () {
        cheerMeDiv.innerText = this.state_eight
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateNineCheers: function () {
        cheerMeDiv.innerText = this.state_nine
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTenCheers: function () {
        cheerMeDiv.innerText = this.state_ten
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateElevenCheers: function () {
        cheerMeDiv.innerText = this.state_eleven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTwelveCheers: function () {
        cheerMeDiv.innerText = this.state_twelve
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirteenCheers: function () {
        cheerMeDiv.innerText = this.state_thirteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFourteenCheers: function () {
        cheerMeDiv.innerText = this.state_fourteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateFifteenCheers: function () {
        cheerMeDiv.innerText = this.state_fifteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSixteenCheers: function () {
        cheerMeDiv.innerText = this.state_sixteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateSeventeenCheers: function () {
        cheerMeDiv.innerText = this.state_seventeen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateEighteenCheers: function () {
        cheerMeDiv.innerText = this.state_eighteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateNineteenCheers: function () {
        cheerMeDiv.innerText = this.state_nineteen
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyCheers: function () {
        cheerMeDiv.innerText = this.state_twenty
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyOneCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyTwoCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyThreeCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyFourCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_four
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyFiveCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentySixCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentySevenCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyEightCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_eight
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateTweentyNineCheers: function () {
        cheerMeDiv.innerText = this.state_twenty_nine
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyCheers: function () {
        cheerMeDiv.innerText = this.state_thirty
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyOneCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_one
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyTwoCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_two
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyThreeCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_three
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyFourCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_four
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtyFiveCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_five
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtySixCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_six
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },
    stateThirtySevenCheers: function () {
        cheerMeDiv.innerText = this.state_thirty_seven
        emojiDiv.innerHTML = this.smileEmoji
        const win = new Audio(this.winsound)
        win.play()
    },


    // Uncheers function
    stateOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_one
        emojiDiv.innerHTML = this.sadEmoji;
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateEightUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eight
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateNineUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_nine
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_ten
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateElevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eleven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwelveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twelve
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFourteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_fourteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateFifteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_fifteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSixteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_sixteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateSeventeenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_seventeen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateEighteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_eigthteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateNineteenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_nineteen
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_one
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentySixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentySevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyEightUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_eight
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateTwentyNinetUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_twenty_nine
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyOneUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_one
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyTwoUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_two
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyThreeUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_three
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyFourUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_four
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtyFiveUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_five
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtySixUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_six
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    stateThirtySevenUnCheers: function () {
        cheerMeDiv.innerText = this.uncheer_thirty_seven
        emojiDiv.innerHTML = this.sadEmoji
        const retrySound = new Audio(this.retrysound)
        retrySound.play()
    },
    
    finishingDrum: function () {
        const retrySound = new Audio(this.rollDrum)
        retrySound.play()
    },

    warning: function() {
        const soundWarning = new Audio(this.warning_sound)
        soundWarning.play()
    },

    alertEndofGame: function() {
        const soundGameEnding = new Audio(this.alertTillEndSound)
        soundGameEnding.play()
    }
}


// cheerMe.warning();
// cheerMe.alertEndofGame()