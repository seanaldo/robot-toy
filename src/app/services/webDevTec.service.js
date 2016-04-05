(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Blackjack',
        'url': 'https://en.wikipedia.org/wiki/Blackjack',
        'description': 'This game is rigged to heavily favour the dealer. You can card count but it will not help much',
        'logo': 'blackjack.png',
        'uilink':'main.games.blackjack'
      },
      {
        'title': 'Poker',
        'url': 'https://en.wikipedia.org/wiki/Poker',
        'description': 'This game is bloody hard to build. The AI is still really stupid at the moment.',
        'logo': 'poker.png',
        'uilink':'main.games.poker'
      },
      {
        'title': 'Roulette',
        'url': 'https://en.wikipedia.org/wiki/Roulette',
        'description': 'You might as well flip a coin for this game. Not built yet but it shouldn\'t be too difficult',
        'logo': 'roulette.png',
        'uilink':'main.games.roulette'
      },
      {
        'title': 'Baccarat',
        'url': 'https://en.wikipedia.org/wiki/Baccarat',
        'description': 'I have no idea how this game works. Not built yet',
        'logo': 'baccarat.png',
        'uilink':'main.games.baccarat'
      },
      {
        'title': 'Slots',
        'url': 'https://en.wikipedia.org/wiki/Slots',
        'description': 'Need to download a slots machine',
        'logo': 'slots.png',
        'uilink':'main.games.slots'
      },
      {
        'title': 'Craps',
        'url': 'https://en.wikipedia.org/wiki/Craps',
        'description': 'Wtf is craps??',
        'logo': 'craps.png',
        'uilink':'main.games.craps'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
