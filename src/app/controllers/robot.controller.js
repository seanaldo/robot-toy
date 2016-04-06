(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('RobotController', function($scope, $filter, $user, $cookies) {
      var vm = this;

      
      vm.isGreat == false;
      //initialise global poker balance

      vm.message = null; vm.robotPosition = null; vm.direction = 'west'; 

      vm.table = [];


      activate(); 

      //template for modals
      $scope.showModal = false;
      $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
      };

      function activate() {
        createTable();
      }

      function createTable() {
        for (var arow = 0; arow < 5; arow++) {
          var row = [];
          for (var acolumn = 0; acolumn < 5; acolumn++) {
            var cell = {};
            cell.position = [arow,acolumn];
            cell.filling = false;
            row.push(cell);
          }
          vm.table.push(row);
        }
      }

      $scope.place = function(cell) {
        cell.filling=true;
        vm.robotPosition = cell.position;
      }

      $scope.move = function() {

      }

      $scope.left = function() {
        
      }

      $scope.right = function() {
        
      }

      $scope.report = function() {
        
      }

      $scope.rotate = function(direction) {
        switch (vm.direction) {
          case 'north':
            vm.direction = (direction == 'left') ? 'west' : 'east';
            break;
          case 'west':
            vm.direction = (direction == 'left') ? 'south' : 'north';
            break;
          case 'east':
            vm.direction = (direction == 'left') ? 'north' : 'south';
            break;
          case 'south':
            vm.direction = (direction == 'left') ? 'east' : 'west';
            break;
          default: return;
        }
      }

    });
})();
