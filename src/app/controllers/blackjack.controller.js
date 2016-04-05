(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('BlackjackController', function($scope, $user, $cookies, deckService) {
      var vm = this; var array = [];
      //initialise global blackjack balance
      $scope.bankBalance = $user.bankBalance; 
      //initialise hand arrays
      vm.deck = []; vm.yourhand = []; vm.handNumber = 0; vm.handNumberTurn = 0; vm.dealerhand = [];
      //initialise counters
      vm.deckCounter = 0; vm.roundCounter = 0; vm.displayBet = 0; vm.lastBet = 0;
      //game options
      vm.roundShuffleOption = 10; vm.numDeckOption = 3; vm.cardCountOption = 'on'; vm.typeOfDeck='default';
      //initialise cardcounting
      vm.trashCounting = [];
      //initialise active hand
      vm.activehand = '';
      //initialise message
      vm.message = '';
      //disable buttons
      vm.disablebuttons = false; vm.hitstayturn = false; vm.splitturn = false; 
      vm.doubleturn = false; vm.quickbet = false; vm.insureturn = false; vm.claimWin = false;

      vm.dealerplays = false;
      
      loadCookie();
      activate(); 

      //need to dynamically change css of hand-collection to position the cards centrally

      $scope.showModal = false;
      $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
      };

      function activate() {
        initDeck();
        vm.roundCounter = 0;
        vm.trashCounting = [];
        updatebankBalance();
        vm.message = 'Place a bet between 10 and 100';
      }

      function initDeck() {
        vm.deck = deckService.returnDeck(vm.numDeckOption, vm.typeOfDeck);
        vm.deckCounter = 0;
      }

      $scope.changeDeck = function(num) {
        vm.typeOfDeck = num;
        activate();
      }

      $scope.initGame = function() {
        if (vm.roundCounter >= vm.roundShuffleOption) {
          activate();
          alert('Deck has been reshuffled');
        }
        $user.bankBalance -= vm.displayBet;
        vm.lastBet = vm.displayBet;
        updatebankBalance();
        resetParameters();
        //game starts properly here
        initBlackjackDeal();
        initFirstBlackjackDecision();
      }

      function resetParameters() {
        //empty all hands
        vm.yourhand = [];
        vm.handNumber = 0;
        vm.handNumberTurn = 0;
        vm.yourhand[vm.handNumberTurn] = [];
        vm.dealerhand = [];
        vm.dealerplays = false;

        vm.quickbet = false;
      }

      function generateHand(hand, isPlayer) {
        if (isPlayer) {
          hand.perfectpair = false;
          hand.bet = 0;
          hand.insurance = false;
          hand.isblackjack = false;
          hand.activeclass = false;
        }
        hand.cards = [];
        hand.busted = false;
        return hand;
      }

      $scope.blackjackBet = function(bet) {
        vm.quickbet = false;
        if (bet == 'clear') {
          vm.displayBet = 0;
        } else {
          if (vm.displayBet + bet > $user.bankBalance) {
            vm.displayBet = $user.bankBalance;
          } else {
            if (vm.displayBet + bet < 101) {
              vm.displayBet += bet;
            } else {
              vm.displayBet = 100;
            }
          }
        }
      }
      
      function initBlackjackDeal() {
        vm.roundCounter++;
        //create hands for you and dealer
        generateHand(vm.yourhand[vm.handNumberTurn], true);
        generateHand(vm.dealerhand, false);
        vm.yourhand[vm.handNumberTurn].bet = vm.displayBet;
        //deal out initial cards
        for (var i = 0; i < 2; i++) {
          $scope.dealBlackjackCard(vm.yourhand[vm.handNumberTurn]);
        }
        $scope.dealBlackjackCard(vm.dealerhand);
      }

      function initFirstBlackjackDecision() {
        vm.activehand = vm.yourhand[vm.handNumberTurn];
        $scope.toggleActiveClass(vm.handNumberTurn);
        if ($scope.getBlackjackTotal(vm.activehand) < 21) {
          togglePlayButtons('double');
          console.log(vm.handNumber)
          if (vm.activehand.cards[0].value === vm.activehand.cards[1].value && vm.handNumber <= 3) {
            vm.splitturn = true;
          }
          if (vm.dealerhand.cards[0].blackjackvalue === 11) {
            vm.insureturn = true;
          }
          vm.message = 'You have '+$scope.getBlackjackTotal(vm.activehand)+'. ';
        } else {
          //blackjack
          vm.activehand.isblackjack = true;
          vm.message = 'You have blackjack! ';
          togglePlayButtons('none');
          $user.bankBalance += (vm.activehand.bet*0.5);
          vm.claimWin = true;
        }
      }

      function blackjackProcess(hand) {
        if ($scope.getBlackjackTotal(hand) === 21) {
          initNextPlayer();
        } else if ($scope.getBlackjackTotal(hand) === 'Busted!!') {
          hand.busted = true
          initNextPlayer();
        } else {
          //another turn
          togglePlayButtons('second');
        }
      }

      function initNextPlayer() {
          vm.handNumberTurn++;
          if (vm.handNumber >=  vm.handNumberTurn) {
            $scope.dealBlackjackCard(vm.yourhand[vm.handNumberTurn])
            initFirstBlackjackDecision();
          } else {
            initDealerTurn();
          }
      }

      function initDealerTurn() {
        for(var k = 0; k < vm.yourhand.length; k++) {
          if (vm.yourhand[k].isblackjack == false && vm.yourhand[k].busted == false) {
            vm.dealerplays = true;
            break;
          }
        }
        togglePlayButtons('none');
        if (vm.dealerplays) {
          vm.activehand = vm.dealerhand;
          while ($scope.getBlackjackTotal(vm.activehand) < 17) {
            $scope.dealBlackjackCard(vm.activehand);
          }
          vm.message += 'Dealer has '+$scope.getBlackjackTotal(vm.activehand)+'. ';
        }
        initFinalVerdict();
      }

      function initFinalVerdict() {
        togglePlayButtons('none');
        for(var k = 0; k < vm.yourhand.length; k++) {
          vm.message += 'For hand '+k+', '
          if (vm.yourhand[k].insurance) {
            if (vm.dealerhand.cards[1].blackjackvalue == 10) {
              $user.bankBalance += vm.yourhand[k].bet;
              vm.message += 'Your insurance covered your opponents blackjack';
            }
          } else {
            if (vm.yourhand[k].isblackjack == true || ($scope.getBlackjackTotal(vm.yourhand[k]) > $scope.getBlackjackTotal(vm.dealerhand) && vm.yourhand[k].busted == false) || vm.dealerhand.busted == true) {
              vm.message += 'You win '+vm.yourhand[k].bet+ ' dollars. ';
              $user.bankBalance += (vm.yourhand[k].bet*2);
            } else if (vm.yourhand[k].busted == true || ($scope.getBlackjackTotal(vm.yourhand[k]) < $scope.getBlackjackTotal(vm.dealerhand) && vm.dealerhand.busted == false)) {
              vm.message += 'You lose '+vm.yourhand[k].bet+ ' dollars. ';
            } else {
              vm.message += 'Its a Draw';
              $user.bankBalance += vm.yourhand[k].bet
            }
          }
        }
        updatebankBalance();
        toggleBetButtons('reset');
      }

      function updatebankBalance() {
        $scope.bankBalance = $user.bankBalance;
        saveToCookie();
      }

      function toggleBetButtons(choice) {
        switch(choice) {
          case 'disable':
            vm.disablebuttons = true;
            break;
          case 'reset':
            vm.disablebuttons = false;
            vm.displayBet = 0;
            vm.quickbet = true;
            vm.activehand = '';
            vm.claimWin = false;
            break;
          default: return;
        }
      }

      function togglePlayButtons(choice) {
        switch(choice) {
          case 'all':
            vm.hitstayturn = true;
            vm.splitturn = true;
            vm.insureturn = true;
            vm.doubleturn = true;
            break;
          case 'none':
            vm.hitstayturn = false;
            vm.splitturn = false;
            vm.insureturn = false;
            vm.doubleturn = false;
            break;
          case 'double':
            vm.hitstayturn = true;
            vm.splitturn = false;
            vm.insureturn = false;
            vm.doubleturn = true;
            break;
          case 'second':
            vm.hitstayturn = true;
            vm.splitturn = false;
            vm.insureturn = false;
            vm.doubleturn = false;
            break;
          default: return;
        }
      }

      $scope.hitBlackjack = function() {
        $scope.dealBlackjackCard(vm.activehand);
        vm.message = 'You have '+$scope.getBlackjackTotal(vm.activehand)+'. ';
        blackjackProcess(vm.activehand);
      }

      $scope.splitBlackjack = function() {
        vm.handNumber++;
        vm.yourhand[vm.handNumber] = [];
        generateHand(vm.yourhand[vm.handNumber], true);
        vm.yourhand[vm.handNumber].cards = vm.activehand.cards.splice(1,1);
        vm.yourhand[vm.handNumber].bet = vm.displayBet;
        $user.bankBalance -= vm.yourhand[vm.handNumber].bet;
        updatebankBalance();
        $scope.dealBlackjackCard(vm.activehand);
        initFirstBlackjackDecision();
      }

      $scope.insureBlackjack = function() {
        $user.bankBalance -= (vm.activehand.bet/2);
        vm.activehand.insurance = true;
        vm.insureturn = false;
      }

      $scope.doubleBlackjack = function() {
        if ($user.bankBalance >= vm.displayBet) {
          $user.bankBalance -= vm.displayBet;
          vm.activehand.bet *= 2;
          $scope.dealBlackjackCard(vm.activehand);
          vm.message = 'You doubled down and have '+$scope.getBlackjackTotal(vm.activehand)+'. ';
          initNextPlayer();
        } else {
          vm.message = 'You dont have enough chips. ';
          vm.doubleturn = false;
        }
      }

      $scope.stayBlackjack = function() {
        vm.message = 'You have '+$scope.getBlackjackTotal(vm.activehand)+'. ';
        initNextPlayer();
      }

      $scope.claimBlackjack = function() {
        vm.claimWin = false;
        initNextPlayer();
      }

      function saveToCookie() {
        $cookies.put('myBankBalance', $user.bankBalance);
        $cookies.put('mybankBalance', $user.bankBalance);
      }

      function loadCookie() {
        $user.bankBalance = parseInt($cookies.get('myBankBalance')) || $user.bankBalance;
      }

      $scope.dealBlackjackCard = function(hand) {
        hand.cards.push(vm.deck[vm.deckCounter]);
        vm.trashCounting.push(vm.deck[vm.deckCounter]);
        vm.deckCounter++;
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

      $scope.toggleShuffleOption = function(value) {
        vm.roundShuffleOption += value;
      }

      $scope.toggleDeckOption = function(value) {
        vm.numDeckOption += value;
      }

      $scope.toggleActiveClass = function(num) {
        for(var k = 0; k < vm.yourhand.length; k++) {
          vm.yourhand[k].activeclass = false;
        }
        vm.yourhand[num].activeclass = true;
      }

      $scope.getCardCount = function() {
        var total = 0;
        for(var i = 0; i < vm.trashCounting.length; i++) {
          if (vm.trashCounting[i].blackjackvalue >= 10) {
            total--
          } else if (vm.trashCounting[i].blackjackvalue <= 6) {
            total++
          }
        }
        return total;
      }

      $scope.getBlackjackTotal = function(hand) {
        if (hand && hand.cards && hand!= undefined) {
          array = hand.cards;
          var total = 0;
          var acecount = 0;
          for(var i = 0; i < array.length; i++) {
              total += array[i].blackjackvalue;
              if (array[i].blackjackvalue === 11) {
                acecount++;
              }
          }
          if (total > 21) {
            if (acecount === 0) {
              total = 'Busted!!';
            } else {
              while (total > 21 && acecount > 0) {
                total -= 10;
                acecount--;
              }
              if (total > 21) {
                total = 'Busted!!';
              }
            }
          }
          return total;
        }
      }
    });
})();
