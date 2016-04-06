(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('MainController', function($scope, webDevTec) {
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
