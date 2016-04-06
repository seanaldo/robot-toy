(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('RobotController', function($scope, $filter, $user, $cookies) {
      var vm = this;

      
      vm.isGreat == false;
      //initialise global poker balance

      vm.message = null; vm.robotPosition = null; vm.direction = 'north'; 

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
          vm.table.unshift(row);
        }
      }

      $scope.place = function(cell) {
        if (!vm.robotPosition) {
          cell.filling=true;
          vm.robotPosition = cell.position;
        }
      }

      $scope.move = function() {
        var tableLocation = vm.table[vm.robotPosition[0]][vm.robotPosition[1]].position;
        var row = tableLocation[0];
        var column = tableLocation[1];
        vm.table[row][column].filling = false;
        switch(vm.direction) {
          case 'north':
            row--;
            break;
          case 'west':
            column--;
            break;
          case 'east':
            column++;
            break;
          case 'south':
            row++;
            break;
          default: break;
        }
        moveRobot(row,column);
      }

      function moveRobot(row,column) {
        vm.table[row][column].filling = true;
        vm.robotPosition = vm.table[row][column].position;
      }

      $scope.report = function() {
        vm.message = "Robot is sitting at "+vm.robotPosition+" facing "+vm.direction;
      }

      $scope.rotate = function(isLeft) {
        if (vm.direction == 'north') {
          vm.direction = (isLeft) ? 'west' : 'east';
        } else if (vm.direction == 'west') {
          vm.direction = (isLeft) ? 'south' : 'north';
        } else if (vm.direction == 'east') {
          vm.direction = (isLeft) ? 'north' : 'south';
        } else if (vm.direction == 'south') {
          vm.direction = (isLeft) ? 'east' : 'west';
        }
      }

      $scope.cannotMove = function(direction) {
        if (vm.robotPosition != null) {
          var verdict = true;
          if (direction == 'north') {
            verdict = (vm.robotPosition[0] == 4) ? true : false;
          } else if (direction == 'west') {
            verdict = (vm.robotPosition[1] == 0) ? true : false;
          } else if (direction == 'east') {
            verdict = (vm.robotPosition[1] == 4) ? true : false;
          } else if (direction == 'south') {
            verdict = (vm.robotPosition[0] == 0) ? true : false;
          }
          return verdict;
        }
      }

    });
})();
