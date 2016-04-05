(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('main.games', {
      url: "games",
      templateUrl: "app/partials/games.html"
    })
    .state('main.games.robot', {
      url: "/robot",
      templateUrl: "app/games/robot.html",
      controller: 'RobotController',
      controllerAs: 'robot'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
