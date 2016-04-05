(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('PokerController', function($scope, $filter, $user, $cookies, randomNames, deckService, pokerResult, pokerAI, pokerSillyAI) {
      var vm = this;

      /*loadCookie(); switch on once finished development*/
      activate(); 

      //initialise global poker balance
      function resetGame() {
        $scope.bankBalance = $user.bankBalance;
        $scope.pokerBalance = $user.pokerBalance;

        vm.gameStarted = false; vm.buyIn = 0; vm.roundStarted = false;

        
        //initialise deck
        vm.deck = []; vm.deckCounter = 0; 

        //initialise hand arrays
        vm.tableStrength = 0; vm.tablehand = []; vm.tablehandDisplay = []; vm.burnhand = []; vm.allHands = []; 

        //initialise counters
        vm.gameRound = 0; vm.pokerRound = 0;

        //chip counters
        vm.topBet = 0; vm.smallBlind = 0; vm.bigBlind = 0; vm.potTotal = 0; vm.selectedRange = 0; vm.calculatedRange = 0; vm.maxAllin = 0; vm.sidePotExist = false;
        
        //game options
        vm.deckOption = false; vm.assessChanceOption = 'on'; vm.numberPlayersOption = 9; vm.typeOfDeck='default';
        
        //names for players
        vm.allNames = randomNames.returnNames(vm.numberPlayersOption);

        //initialise cardcounting
        vm.assessChance = [];

        //determines turn system
        vm.dealerPosition = 0; vm.actingPosition = 0;

        //initialise message
        vm.message = '';

        //disable buttons
        vm.callturn = false; vm.checkturn = false; vm.raiseturn = false; vm.foldturn = false; vm.allinturn = false;
      }

      $scope.showModal = false;
      $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
      };

      $scope.changeDeck = function(num) {
        vm.typeOfDeck = num;
        activate();
      }

      $scope.testCards = function() {
        pokerResult.returnTest();
      }

      function activate() {
        //choose game type
        updatebankBalance();
      }

      $scope.initGame = function(buyingIn) {
        //all these things only happen once
        resetGame();
        vm.buyIn = buyingIn;
        $user.bankBalance -= vm.buyIn;
        $user.pokerBalance += vm.buyIn;
        updatebankBalance();
        vm.gameStarted = true;
        randomiseDealerChip();
        vm.gameRound = 0;
      }

      function randomiseDealerChip() {
        vm.dealerPosition = Math.floor(Math.random() * 9);
        //change structure soon
      }

      $scope.initRound = function() {
        vm.gameRound++;
        vm.roundStarted = true;
        resetParameters();
        if (vm.allHands[0].lost || playersLeft('alive') < 2) {
          GameOver();
          return;
        }
        togglePlayButtons('none');
        moveDealerChip();
        shuffleDeck();
        raiseBlinds();
        payBlinds();
        initPokerDeal();
      }

      function shuffleDeck() {
        vm.deck = deckService.returnDeck(1, vm.typeOfDeck);
        vm.deckCounter = 0;
      }

      function raiseBlinds() {
        if (vm.gameRound == 1) {
          vm.smallBlind = vm.buyIn / 100;
          vm.bigBlind = vm.buyIn / 50;
        } else {
          if (vm.gameRound % 20 == 0) { //dynamic value soon
            vm.smallBlind *= 2;
            vm.bigBlind *= 2;
          }
        }
      }

      function payBlinds() {
        if (playersLeft('alive') > 2) {
          moveActingPosition(true);
        }
        var small = 0; var big = 0;
        if (!vm.allHands[vm.actingPosition].lost) {
          small = Math.min(vm.allHands[vm.actingPosition].pokerChips, vm.smallBlind)
          vm.allHands[vm.actingPosition].pokerChips -= small;
          vm.allHands[vm.actingPosition].bet += small;
          vm.allHands[vm.actingPosition].announce = vm.allHands[vm.actingPosition].name+' posted small blind '+small;
        }

        moveActingPosition(false);
        if (!vm.allHands[vm.actingPosition].lost) {
          big = Math.min(vm.allHands[vm.actingPosition].pokerChips, vm.bigBlind)
          vm.allHands[vm.actingPosition].pokerChips -= big;
          vm.allHands[vm.actingPosition].bet += big;
          vm.allHands[vm.actingPosition].bigBoy = true;
          vm.topBet = vm.bigBlind;
          vm.allHands[vm.actingPosition].announce = vm.allHands[vm.actingPosition].name+' posted big blind '+big;
        }
      }

      $scope.calculateRange = function() {
        recalculateRange(false);
      }

      function recalculateRange(returnValue) {
        var minBet = (vm.topBet == 0) ? vm.bigBlind : vm.topBet * 2;
        minBet = (minBet < vm.allHands[0].pokerChips) ? minBet : vm.allHands[0].pokerChips;
        var allStack = []; var largestStack = 0;
        angular.forEach(vm.allHands, function(hand) {
          if (!hand.isPlayer) {
            allStack.push(hand.pokerChips);
          }
        });
        largestStack = Math.max.apply(Math, allStack);
        var maxBet = Math.min(vm.allHands[0].pokerChips, largestStack);
        vm.calculatedRange = Math.round(((vm.selectedRange/100) * (maxBet-minBet)) + minBet);
        if (returnValue) {
          return maxBet;
        }
      }

      function moveDealerChip() {
        var continueLoop = false;
        do {
          vm.dealerPosition = (vm.dealerPosition < 8) ? vm.dealerPosition+1 : 0;
          if (vm.allHands[vm.actingPosition].lost) {
            continueLoop = (vm.gameRound - vm.allHands[vm.actingPosition].timeOfDeath > 2) ? true : false;
          }
        } while (continueLoop);
        vm.allHands[vm.dealerPosition].dealer = true;
        resetActingPosition();
      }

      function moveActingPosition(ignoreDead) {
        if (ignoreDead) {
          var continueLoop = false;
          do {
            vm.actingPosition = (vm.actingPosition < 8) ? vm.actingPosition+1 : 0;
            if (vm.allHands[vm.actingPosition].lost) {
              continueLoop = (vm.gameRound - vm.allHands[vm.actingPosition].timeOfDeath > 2) ? true : false;
            }
          } while (continueLoop);
        } else {
          do {
            vm.actingPosition = (vm.actingPosition < 8) ? vm.actingPosition+1 : 0;
          } while (vm.allHands[vm.actingPosition].lost);
        }
      }

      function resetActingPosition() {
        vm.actingPosition = vm.dealerPosition;
      }

      function resetParameters() {
        //empty all hands
        var isReset = true;
        if (vm.gameRound == 1) {
          var isReset = false;
          //randomise names
        }
        for (var players = 0; players < vm.numberPlayersOption; players++) {
          if (!isReset) {
            vm.allHands[players] = [];
          } 
          if (players == 0) {
            generateHand(vm.allHands[players], true, isReset, players);
          } else {
            generateHand(vm.allHands[players], false, isReset, players);
          }
        }
        generateHand(vm.tablehand, false, isReset, null);
        generateHand(vm.burnhand, false, isReset, null);
        vm.potTotal = 0;
        vm.pokerRound = 0;
        vm.tablehandDisplay = [];
      }

      function generateHand(hand, isPlayer, isReset, seatPosition) {
        hand.cards = [];
        hand.rating = 0;
        hand.verdict = '';
        hand.advice = '';
        hand.announce = '';
        hand.show = false;
        hand.dealer = false;
        hand.bet = 0;
        //sidepots for allins
        hand.locked = false;
        hand.sidePot = 0;
        //special status
        hand.isChecked = false;
        hand.allin = false;
        hand.folded = false;
        hand.bigBoy = false;
        if (isReset) {
          if (hand.pokerChips == 0) {
            hand.lost = true;
            if (hand.timeOfDeath == 0) {
              hand.timeOfDeath = vm.gameRound;
            }
          }
        } else {
          hand.isPlayer = isPlayer;
          hand.timeOfDeath = 0;
          hand.lost = false;
          hand.pokerChips = vm.buyIn;
          hand.name = (seatPosition == null) ? null : vm.allNames[seatPosition];
          hand.seatNumber = seatPosition;
        }
        return hand;
      }
      
      function initPokerDeal() {
        for (var a = 0; a < 2; a++) {
          for (var b = vm.dealerPosition + 1; b < 9; b++) {
            if (!vm.allHands[b].lost) {
              dealPokerCard(vm.allHands[b]);
            }
          }
          for (var c = 0; c < vm.dealerPosition + 1; c++) {
            if (!vm.allHands[c].lost) {
              dealPokerCard(vm.allHands[c]);
            }
          }
        }
        initNextPlayer();
      }

      function initNextRound() {
        vm.pokerRound++;
        resetBetRound();
        if (playersLeft('players') > 1) {
          if (vm.pokerRound === 1) {
            dealPokerCard(vm.burnhand);
            for (var a = 0; a < 3; a++) {
              dealPokerCard(vm.tablehand);
            }
            vm.tablehandDisplay = $.extend(true, [], vm.tablehand.cards);
            vm.tableStrength = pokerResult.processPokerStrength(vm.tablehand, null).rating;
            initNextPlayer();
          } else if (vm.pokerRound >= 4) {
            initFinalVerdict();
          } else {
            dealPokerCard(vm.burnhand);
            dealPokerCard(vm.tablehand);
            vm.tablehandDisplay.push(vm.tablehand.cards[vm.tablehand.cards.length-1]);
            vm.tableStrength = pokerResult.processPokerStrength(vm.tablehand, null).rating;
            initNextPlayer();
          }
        } else {
          if (playersLeft('allin') > 0) {
            //finish dealing cards
            while (vm.tablehand.cards.length < 5) {
              if (vm.tablehand.cards.length == 0 || vm.tablehand.cards.length == 3 || vm.tablehand.cards.length == 4) {
                dealPokerCard(vm.burnhand);
              }
              dealPokerCard(vm.tablehand);
              vm.tablehandDisplay.push(vm.tablehand.cards[vm.tablehand.cards.length-1]);
              vm.tableStrength = pokerResult.processPokerStrength(vm.tablehand, null).rating;
            }
          }
          //recalculate strength
          angular.forEach(vm.allHands, function(hand) {
            if (!hand.lost && !hand.folded) {
              var oppHand = pokerResult.processPokerStrength(hand, vm.tablehand);
              hand.rating = oppHand.rating;
              hand.verdict = oppHand.verdict;
            }
          });
          initFinalVerdict();
        }
      }

      function resetBetRound() {
        if (playersLeft('unlocked') > 0) {
          allocateSidePot();
        }
        angular.forEach(vm.allHands, function(hand) {
          vm.potTotal += hand.bet;
          hand.isChecked = false;
          hand.bet = 0;
        });
        vm.topBet = 0;
        resetActingPosition();
      }

      function allocateSidePot() {
        vm.sidePotExist = true;
        var allInStacks = [];
        angular.forEach(vm.allHands, function(hand) {
          if (!hand.locked && hand.allin) {
            angular.forEach(vm.allHands, function(handy) {
              hand.sidePot += Math.min(handy.bet, hand.bet);
            })
            hand.sidePot += vm.potTotal;
            hand.locked = true;
          }
        });
      }

      function playersLeft(playerType) {
        var remainingPlayers = 0;
        var remainingAlive = 0;
        var remainingAllin = 0;
        var remainingUnlocked = 0;
        angular.forEach(vm.allHands, function(hand) {
          if (!hand.lost) {
            remainingAlive++;
            if (!hand.folded) {
              if (!hand.allin) {
                remainingPlayers++;
              } else {
                remainingAllin++;
                if (!hand.locked) {
                  remainingUnlocked++;
                }
              }
            }
          } 
        });

        switch(playerType) {
          case 'alive':
            return remainingAlive;
            break;
          case 'players':
            return remainingPlayers
            break;
          case 'allin':
            return remainingAllin;
            break;
          case 'unlocked':
            return remainingUnlocked;
            break;
          default: return;
        }
      }

      function dealPokerCard(hand) {
        hand.cards.push(vm.deck[vm.deckCounter]);
        vm.deckCounter++;
      }

      function initNextPlayer() {
        togglePlayButtons('none');
        moveActingPosition(false);
        var thisHand = vm.allHands[vm.actingPosition];
        var specialCondition = (thisHand.bigBoy && vm.pokerRound == 0 && vm.topBet == vm.bigBlind) ? true : false;
        if ((thisHand.isChecked && vm.topBet == 0) || (thisHand.bet == vm.topBet && vm.topBet > 0 && !specialCondition)) {
          initNextRound();
        } else {
          //next player
          if (vm.allHands[vm.actingPosition].folded || vm.allHands[vm.actingPosition].allin || vm.allHands[vm.actingPosition].lost ) {
            initNextPlayer();
          } else {
            if (vm.allHands[vm.actingPosition].isPlayer == true) {
              initPlayerTurn();
            } else {
              initOpponentTurn(vm.allHands[vm.actingPosition])
            }
          }
        }
      }

      function initPlayerTurn() {
        returnMaxAllIn();
        //get hand
        var myHand = pokerResult.processPokerStrength(vm.allHands[0], vm.tablehand);
        vm.allHands[0].rating = myHand.rating;
        vm.allHands[0].verdict = myHand.verdict;
        vm.allHands[0].announce = 'R'+vm.pokerRound+': '
        vm.message = vm.allHands[0].verdict + '. '
        vm.message += vm.allHands[0].advice;
        recalculateRange(false);
        if (vm.topBet == 0 || (vm.pokerRound == 0 && vm.allHands[0].bigBoy == true)) {
          togglePlayButtons('start');
        } else {
          if (vm.allHands[0].pokerChips > vm.topBet) {
            togglePlayButtons('continue');
          } else {
            togglePlayButtons('short');
          }
        }
      }

      function initOpponentTurn(hand) {
        var oppHand = pokerResult.processPokerStrength(hand, vm.tablehand);
        hand.rating = oppHand.rating;
        hand.verdict = oppHand.verdict;
        hand.announce = 'R'+vm.pokerRound+': '
        //determine choices
        var oppChoices = '';
        var diff = vm.topBet - hand.bet;
        if (vm.topBet == 0 || (vm.pokerRound == 0 && hand.bigBoy == true && diff == 0)) {
          oppChoices = 'start';
        } else {
          if (hand.pokerChips > diff) {
            oppChoices = 'continue';
          } else {
            oppChoices = 'short';
          }
        }
        // var decision = pokerAI.init(hand, oppChoices);
        var decision = pokerSillyAI.init(hand, oppChoices);
        if ( decision == 'call' ) {
          pokerCall(hand);
        } else if ( decision == 'check' ) {
          pokerCheck(hand);
        } else if ( decision == 'allin') {
          pokerAllin(hand);
        };

      }

      function randomNumbers(min,max) {
        var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
        return randomNumber;
      }

      function initFinalVerdict() {
        togglePlayButtons('none');
        resetBetRound();
        var bestHand = [];
        //determine winner
        angular.forEach(vm.allHands, function(hand) {
          if (!hand.folded && !hand.lost) {
            //sort hands by rating
            bestHand.push({
              sidePot:hand.sidePot,
              seatNumber:hand.seatNumber,
              rating:hand.rating
            });
          }
        });

        bestHand = $filter('orderBy')(bestHand, ['-rating','sidePot']);

        var potUsed = 0;

        for (var a = 0; a < bestHand.length; a++) {
          var winnings = 0;
          //determine winnings
          if (bestHand[a].sidePot) {
            if (bestHand[a].sidePot > potUsed) {
              winnings = bestHand[a].sidePot - potUsed;
              potUsed += bestHand[a].sidePot;
            }
          } else {
            winnings = vm.potTotal;
            potUsed += vm.potTotal;
          }
          console.log(bestHand[a].seatNumber +' - '+ winnings)
          if (winnings > 0) {
            //determine splits
            var b = a;
            var allWinners = [bestHand[a].seatNumber];
            while (bestHand[b+1] && bestHand[b].rating == bestHand[b+1].rating) {
              allWinners.push(bestHand[b+1].seatNumber)
              b++;
            }
            var remainder = winnings%allWinners.length;
            winnings = (winnings-remainder)/allWinners.length;
            for (var c = 0; c < allWinners.length; c++) {
              victoryGloat(vm.allHands[allWinners[c]], winnings, vm.allHands[allWinners[c]].verdict);
              vm.potTotal -= winnings;
              if (c == 0) {
                vm.allHands[allWinners[c]].pokerChips += remainder;
              }
            }
          }
        }
        updatebankBalance();
        vm.roundStarted = false;
      };

      function victoryGloat(hand, winning, verdict) {
        hand.announce = 'I won with a '+verdict;
        vm.message += hand.name+' won '+winning+' with a '+verdict;
        hand.show = true;
        hand.pokerChips += winning;
      }

      function updatebankBalance() {
        $scope.bankBalance = $user.bankBalance;
        $scope.pokerBalance = $user.pokerBalance;
        saveToCookie();
      }

      function togglePlayButtons(choice) {
        switch(choice) {
          case 'none':
            vm.checkturn = false;
            vm.callturn = false;
            vm.raiseturn = false;
            vm.foldturn = false;
            vm.allinturn = false;
            break;
          case 'start':
            vm.checkturn = true;
            vm.callturn = false;
            vm.raiseturn = true;
            vm.foldturn = true;
            vm.allinturn = true;
            break;
          case 'short':
            vm.checkturn = false;
            vm.callturn = false;
            vm.raiseturn = false;
            vm.foldturn = true;
            vm.allinturn = true;
            break;
          case 'continue':
            vm.checkturn = false;
            vm.callturn = true;
            vm.raiseturn = true;
            vm.foldturn = true;
            vm.allinturn = true;
            break;
          default: return;
        }
      }

      $scope.makeDecision = function(decision) {
        switch(decision) {
          case 1:
            pokerCheck(vm.allHands[0]);
            break;
          case 2:
            pokerCall(vm.allHands[0]);
            break;
          case 3:
            pokerFold(vm.allHands[0]);
            break;
          case 4:
            pokerAllin(vm.allHands[0]);
            break;
          default:
            pokerCheck(vm.allHands[0]);
        }
      }

      $scope.playerRaise = function(value) {
        var diff = value - vm.allHands[0].bet
        vm.allHands[0].pokerChips -= diff;
        vm.allHands[0].bet += diff;
        vm.topBet = value;
        initNextPlayer();
      }

      function pokerCheck(hand) {
        hand.isChecked = true;
        hand.announce += hand.name+' checked';
        initNextPlayer();
      }

      function pokerCall(hand) {
        var diff = vm.topBet - hand.bet
        hand.pokerChips -= diff;
        hand.bet += diff;
        hand.announce += hand.name+' called '+hand.bet;
        initNextPlayer();
      }

      function pokerRaise(hand, value) {
        var diff = value - hand.bet;
        hand.pokerChips -= diff;
        hand.bet += diff;
        vm.topBet = value;
        hand.announce += hand.name+' raised by '+hand.bet;
        initNextPlayer();
      }

      function pokerFold(hand) {
        hand.folded = true;
        hand.announce += hand.name+' is folding';
        initNextPlayer();
      }

      function pokerAllin(hand) {
        hand.bet += hand.pokerChips;
        hand.pokerChips = 0;
        hand.allin = true;
        if (hand.bet > vm.topBet) {
          vm.topBet = hand.bet;
        }
        hand.announce += hand.name+' is all in with '+hand.bet;
        initNextPlayer();
      }

      function returnMaxAllIn() {
        vm.maxAllin = Math.min(vm.allHands[0].pokerChips, recalculateRange(true));
      }

      function saveToCookie() {
        $cookies.put('myBankBalance', $user.bankBalance);
        $cookies.put('myPokerBalance', $user.pokerBalance);
      }

      function loadCookie() {
        $user.bankBalance = parseInt($cookies.get('myBankBalance')) || $user.bankBalance;
        $user.pokerBalance = parseInt($cookies.get('myPokerBalance')) || $user.pokerBalance;
      }

      $scope.betColor = function(bet) {
        if (bet <= 10) {
          return 'bet-red';
        } else if (bet <=25) {
          return 'bet-green';
        } else if (bet <=50) {
          return 'bet-blue';
        } else {
          return 'bet-black';
        }
      }

      function GameOver() {
        if (vm.allHands[0].lost) {
          alert('You lost')
        } else {
          alert('You win');
        }
        vm.gameStarted = false;
        return false;
      }
 
      /*$scope.assessChance = function() {
        var total = 0;
        //calculate percentage of winning
        return total;
      }*/
    });
})();
