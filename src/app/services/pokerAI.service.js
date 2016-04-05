(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('pokerAI', pokerAI)
      .service('pokerSillyAI', pokerSillyAI);

  /** @ngInject */
  function pokerAI() {

    this.init = init;

    function init(hand, choices) {
      console.log('Opp '+vm.actingPosition+' is thinking')

      //go easy on first round
      if (vm.pokerRound == 0) {
        var difference = hand.rating / 10;
      } else {
        var difference = hand.rating - vm.tableStrength;
      }

      var chance = randomNumbers(0,100);
      if (vm.topBet == 0) {
        var randomRaise = randomNumbers(vm.bigBlind*2,hand.pokerChips);
      } else {
        var randomRaise = randomNumbers(vm.topBet*2,hand.pokerChips);
      }
      if (choices == 'start') {

        switch(true) {
          case (difference <= 100):
            if (chance <= 90)
              { pokerCheck(hand); }
            else if (chance > 90 && chance <= 99) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 100 && difference <= 500):
            if (chance <= 82)
              { pokerCheck(hand); }
            else if (chance > 82 && chance <= 97) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 500 && difference <= 1000):
            if (chance <= 70)
              { pokerCheck(hand); }
            else if (chance > 70 && chance <= 90) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 1000 && difference <= 2000):
            if (chance <= 60)
              { pokerCheck(hand); }
            else if (chance > 60 && chance <= 85) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 2000 && difference <= 4000):
            if (chance <= 50)
              { pokerCheck(hand); }
            else if (chance > 50 && chance <= 80) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 4000 && difference <= 10000):
            if (chance <= 36)
              { pokerCheck(hand); }
            else if (chance > 36 && chance <= 60) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          default: return;

        }
      } else if (choices == 'continue') {

        switch(true) {
          case (difference <= 100):
            if (chance <= 60)
              { pokerFold(hand); }
            else if (chance > 60 && chance <= 90) 
              { pokerCall(hand); }
            else if (chance > 90 && chance <= 99) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 100 && difference <= 500):
            if (chance <= 47)
              { pokerFold(hand); }
            else if (chance > 47 && chance <= 87) 
              { pokerCall(hand); }
            else if (chance > 87 && chance <= 95) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 500 && difference <= 1000):
            if (chance <= 35)
              { pokerFold(hand); }
            else if (chance > 35 && chance <= 80) 
              { pokerCall(hand); }
            else if (chance > 80 && chance <= 90) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 1000 && difference <= 2000):
            if (chance <= 10)
              { pokerFold(hand); }
            else if (chance > 10 && chance <= 57) 
              { pokerCall(hand); }
            else if (chance > 57 && chance <= 80) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 2000 && difference <= 4000):
            if (chance <= 3)
              { pokerFold(hand); }
            else if (chance > 3 && chance <= 52) 
              { pokerCall(hand); }
            else if (chance > 52 && chance <= 78) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 4000 && difference <= 10000):
            if (chance <= 1)
              { pokerFold(hand); }
            else if (chance > 1 && chance <= 44) 
              { pokerCall(hand); }
            else if (chance > 44 && chance <= 76) 
              { pokerRaise(hand, randomRaise); }
            else 
              { pokerAllin(hand); }
            break;
          default: return;
        }

      } else if (choices == 'short') {

        switch(true) {
          case (difference <= 100):
            if (chance <= 99)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 100 && difference <= 500):
            if (chance <= 94)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 500 && difference <= 1000):
            if (chance <= 75)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 1000 && difference <= 2000):
            if (chance <= 53)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 2000 && difference <= 4000):
            if (chance <= 20)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          case (difference > 4000 && difference <= 10000):
            if (chance <= 1)
              { pokerFold(hand); }
            else 
              { pokerAllin(hand); }
            break;
          default: return;
        }
      }
    }
  }

  function pokerSillyAI() {

    this.init = init;

    function init(hand, choices) {
      if (choices == 'start') {
        return 'check';
      } else if (choices == 'continue') {
        return 'call';
      } else {
        return 'allin';
      }
    }

  }

})();
