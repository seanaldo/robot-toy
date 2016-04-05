(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('SlotsController', function($scope, $user, $cookies, blackjackService) {
      var vm = this;
      //initialise global blackjack balance
      $scope.bankBalance = $user.bankBalance; vm.slotBet = 0;
      // slot arrays
      vm.slotLine1 = [1,2,3,4,5,6,7];
      vm.slotLine2 = [1,2,3,4,5,6,7];
      vm.slotLine3 = [1,2,3,4,5,6,7];
      vm.finalSlot = [];
      //initialise message
      vm.message = '';
      //disable buttons
      activate(); 

      function activate() {
        vm.message = 'Place a bet between 10 and 100';
      }

      $scope.initGame = function() {
        vm.finalSlot = [];
        var num1 = vm.slotLine1[Math.floor(Math.random()*vm.slotLine1.length)];
        var num2 = vm.slotLine2[Math.floor(Math.random()*vm.slotLine2.length)];
        var num3 = vm.slotLine3[Math.floor(Math.random()*vm.slotLine3.length)];
        vm.finalSlot.push(num1, num2, num3);
        resultSlots(vm.finalSlot);
      }

      $scope.slotsBet = function(bet) {
        $user.bankBalance -= bet;
        vm.slotBet += bet;
        updateBankBalance();
        vm.message = "";
      }

      function resultSlots(result) {
        if (result[0] == result[1] && result[1] == result[2] && result[0] == result[2]) {
          $user.bankBalance += (vm.slotBet * 50);
          updateBankBalance();
          vm.message = "WINNER!";
        } else {
          vm.message = "Sorry try again!";
        }
        vm.slotBet=0;
      }

      function updateBankBalance() {
        $scope.bankBalance = $user.bankBalance;
      }
    })
})();
