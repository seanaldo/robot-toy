(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('AccountController', function($scope, $user, $cookies) {

      var change = 250;

      activate();

      function activate() {
        loadCookie();
        updateDisplay();
      }

      function updateDisplay() {
        $scope.bankBalance = $user.bankBalance;
        $scope.loanBalance = $user.loanBalance;
        $scope.interestBalance = $user.interestBalance;
        saveToCookie();
      }

      $scope.addLoan = function() {
        $user.bankBalance += change;
        $user.loanBalance += change;
        $user.interestBalance += (change/10);
        updateDisplay();
      };

      $scope.deductLoan = function() {
        if ($user.loanBalance > 0) {
          $user.bankBalance -= change;
          $user.loanBalance -= change;
          updateDisplay();
        }
      };

      $scope.deductInterest = function() {
        if ($user.interestBalance > 100) {
          $user.bankBalance -= 100;
          $user.interestBalance -= 100;
        } else {
          $user.bankBalance -= $user.interestBalance;
          $user.interestBalance -= $user.interestBalance;
        }
        updateDisplay();
      };

      function saveToCookie() {
        $cookies.put('myBankBalance', $user.bankBalance);
        $cookies.put('myLoanBalance', $user.loanBalance);
        $cookies.put('myInterestBalance', $user.interestBalance);
      }

      function loadCookie() {
        $user.bankBalance = parseInt($cookies.get('myBankBalance')) || $user.bankBalance;
        $user.loanBalance = parseInt($cookies.get('myLoanBalance')) || $user.loanBalance;
        $user.interestBalance = parseInt($cookies.get('myInterestBalance')) || $user.interestBalance;
      }

    })

    
})();
