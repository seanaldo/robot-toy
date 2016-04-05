(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .factory('globalService', function($scope, $user) {
      function updateBankBalance() {
        //placeholder for global bank balance
        $scope.bankBalance = $user.bankBalance;
      }
    })

    .controller('MainController', function($scope, $user, $timeout, webDevTec, toastr) {
      var vm = this;

      vm.awesomeThings = [];
      vm.classAnimation = '';

      activate();

      function activate() {
        getWebDevTec();
      }

      function getWebDevTec() {
        vm.awesomeThings = webDevTec.getTec();

        angular.forEach(vm.awesomeThings, function(awesomeThing) {
          awesomeThing.rank = Math.random();
        });
      }
    });
})();
