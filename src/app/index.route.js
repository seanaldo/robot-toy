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
    .state('main.account', {
      url: "account",
      templateUrl: "app/partials/account.html",
      controller: 'AccountController',
      controllerAs: 'account'
    })
    .state('main.about', {
      url: "about",
      templateUrl: "app/partials/about.html"
    })
    .state('main.contact', {
      url: "contact",
      templateUrl: "app/partials/contact.html"
    })
    .state('main.games.blackjack', {
      url: "/blackjack",
      templateUrl: "app/games/blackjack.html",
      controller: 'BlackjackController',
      controllerAs: 'blackjack'
    })
    .state('main.games.poker', {
      url: "/poker",
      templateUrl: "app/games/poker.html",
      controller: 'PokerController',
      controllerAs: 'poker'
    })
    .state('main.games.baccarat', {
      url: "/baccarat",
      templateUrl: "app/games/baccarat.html"
    })
    .state('main.games.slots', {
      url: "/slots",
      templateUrl: "app/games/slots.html",
      controller: 'SlotsController',
      controllerAs: 'slots'
    })
    .state('main.games.craps', {
      url: "/craps",
      templateUrl: "app/games/craps.html",
      controller: 'CrapsController',
      controllerAs: 'craps'
    })
    .state('main.games.roulette', {
      url: "/roulette",
      templateUrl: "app/games/roulette.html"
    });

    $urlRouterProvider.otherwise('/');
  }

})();
