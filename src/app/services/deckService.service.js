(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('deckService', deckService);

  /** @ngInject */

  function deckService() {

    this.myDeck = [];
    this.returnDeck = returnDeck;

    var blackjacktestdeck = [
      {
        'title': 'Ace of Spades',
        'value': 1,
        'suit': 'spade',
        'blackjackvalue': 11,
        'picture': 'AS.gif'
      },
      {
        'title': '10 of Hearts',
        'value': 10,
        'suit': 'heart',
        'pokervalue': 10,'blackjackvalue': 10,
        'picture': '10H.gif'
      },
      {
        'title': 'Ace of Diamond',
        'value': 1,
        'suit': 'diamond',
        'blackjackvalue': 11,
        'picture': 'AD.gif'
      },
      {
        'title': 'Ace of Club',
        'value': 1,
        'suit': 'club',
        'blackjackvalue': 11,
        'picture': 'AC.gif'
      },
      {
        'title': '10 of Hearts',
        'value': 10,
        'suit': 'heart',
        'pokervalue': 10,'blackjackvalue': 10,
        'picture': '10H.gif'
      },
      {
        'title': '10 of Clubs',
        'value': 10,
        'suit': 'club',
        'pokervalue': 10,'blackjackvalue': 10,
        'picture': '10C.gif'
      },
      {
        'title': '10 of Spades',
        'value': 10,
        'suit': 'spade',
        'pokervalue': 10,'blackjackvalue': 10,
        'picture': '10S.gif'
      },
      {
        'title': '10 of Diamond',
        'value': 10,
        'suit': 'diamond',
        'pokervalue': 10,'blackjackvalue': 10,
        'picture': '10D.gif'
      }
    ];

    var pokertestdeck = [
      {
        'title': 'Ace of Spades',
        'value': 1,
        'suit': 'spade',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AS.gif'
      },
      {
        'title': '2 of Spades',
        'value': 2,
        'suit': 'spade',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2S.gif'
      },
      {
        'title': '3 of Spades',
        'value': 3,
        'suit': 'spade',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3S.gif'
      },
      {
        'title': '4 of Spades',
        'value': 4,
        'suit': 'spade',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4S.gif'
      },
      {
        'title': '5 of Spades',
        'value': 5,
        'suit': 'spade',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5S.gif'
      },
      {
        'title': '6 of Spades',
        'value': 6,
        'suit': 'spade',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6S.gif'
      },
      {
        'title': '7 of Spades',
        'value': 7,
        'suit': 'spade',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7S.gif'
      },
      {
        'title': '8 of Spades',
        'value': 8,
        'suit': 'spade',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8S.gif'
      },
      {
        'title': '9 of Spades',
        'value': 9,
        'suit': 'spade',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9S.gif'
      },
      {
        'title': '10 of Spades',
        'value': 10,
        'suit': 'spade',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10S.gif'
      },
      {
        'title': 'J of Spades',
        'value': 11,
        'suit': 'spade',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JS.gif'
      },
      {
        'title': 'Q of Spades',
        'value': 12,
        'suit': 'spade',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QS.gif'
      },
      {
        'title': 'K of Spades',
        'value': 13,
        'suit': 'spade',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KS.gif'
      },
      {
        'title': 'Ace of Hearts',
        'value': 1,
        'suit': 'heart',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AH.gif'
      },
      {
        'title': '2 of Hearts',
        'value': 2,
        'suit': 'heart',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2H.gif'
      },
      {
        'title': '3 of Hearts',
        'value': 3,
        'suit': 'heart',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3H.gif'
      },
      {
        'title': '4 of Hearts',
        'value': 4,
        'suit': 'heart',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4H.gif'
      },
      {
        'title': '5 of Hearts',
        'value': 5,
        'suit': 'heart',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5H.gif'
      },
      {
        'title': '6 of Hearts',
        'value': 6,
        'suit': 'heart',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6H.gif'
      },
      {
        'title': '7 of Hearts',
        'value': 7,
        'suit': 'heart',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7H.gif'
      },
      {
        'title': '8 of Hearts',
        'value': 8,
        'suit': 'heart',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8H.gif'
      },
      {
        'title': '9 of Hearts',
        'value': 9,
        'suit': 'heart',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9H.gif'
      },
      {
        'title': '10 of Hearts',
        'value': 10,
        'suit': 'heart',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10H.gif'
      },
      {
        'title': 'J of Hearts',
        'value': 11,
        'suit': 'heart',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JH.gif'
      },
      {
        'title': 'Q of Hearts',
        'value': 12,
        'suit': 'heart',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QH.gif'
      },
      {
        'title': 'K of Hearts',
        'value': 13,
        'suit': 'heart',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KH.gif'
      }
    ]

    var deck = [
      {
        'title': 'Ace of Spades',
        'value': 1,
        'suit': 'spade',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AS.gif'
      },
      {
        'title': '2 of Spades',
        'value': 2,
        'suit': 'spade',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2S.gif'
      },
      {
        'title': '3 of Spades',
        'value': 3,
        'suit': 'spade',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3S.gif'
      },
      {
        'title': '4 of Spades',
        'value': 4,
        'suit': 'spade',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4S.gif'
      },
      {
        'title': '5 of Spades',
        'value': 5,
        'suit': 'spade',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5S.gif'
      },
      {
        'title': '6 of Spades',
        'value': 6,
        'suit': 'spade',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6S.gif'
      },
      {
        'title': '7 of Spades',
        'value': 7,
        'suit': 'spade',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7S.gif'
      },
      {
        'title': '8 of Spades',
        'value': 8,
        'suit': 'spade',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8S.gif'
      },
      {
        'title': '9 of Spades',
        'value': 9,
        'suit': 'spade',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9S.gif'
      },
      {
        'title': '10 of Spades',
        'value': 10,
        'suit': 'spade',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10S.gif'
      },
      {
        'title': 'J of Spades',
        'value': 11,
        'suit': 'spade',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JS.gif'
      },
      {
        'title': 'Q of Spades',
        'value': 12,
        'suit': 'spade',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QS.gif'
      },
      {
        'title': 'K of Spades',
        'value': 13,
        'suit': 'spade',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KS.gif'
      },
      {
        'title': 'Ace of Hearts',
        'value': 1,
        'suit': 'heart',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AH.gif'
      },
      {
        'title': '2 of Hearts',
        'value': 2,
        'suit': 'heart',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2H.gif'
      },
      {
        'title': '3 of Hearts',
        'value': 3,
        'suit': 'heart',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3H.gif'
      },
      {
        'title': '4 of Hearts',
        'value': 4,
        'suit': 'heart',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4H.gif'
      },
      {
        'title': '5 of Hearts',
        'value': 5,
        'suit': 'heart',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5H.gif'
      },
      {
        'title': '6 of Hearts',
        'value': 6,
        'suit': 'heart',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6H.gif'
      },
      {
        'title': '7 of Hearts',
        'value': 7,
        'suit': 'heart',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7H.gif'
      },
      {
        'title': '8 of Hearts',
        'value': 8,
        'suit': 'heart',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8H.gif'
      },
      {
        'title': '9 of Hearts',
        'value': 9,
        'suit': 'heart',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9H.gif'
      },
      {
        'title': '10 of Hearts',
        'value': 10,
        'suit': 'heart',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10H.gif'
      },
      {
        'title': 'J of Hearts',
        'value': 11,
        'suit': 'heart',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JH.gif'
      },
      {
        'title': 'Q of Hearts',
        'value': 12,
        'suit': 'heart',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QH.gif'
      },
      {
        'title': 'K of Hearts',
        'value': 13,
        'suit': 'heart',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KH.gif'
      },
      {
        'title': 'Ace of Clubs',
        'value': 1,
        'suit': 'club',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AC.gif'
      },
      {
        'title': '2 of Clubs',
        'value': 2,
        'suit': 'club',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2C.gif'
      },
      {
        'title': '3 of Clubs',
        'value': 3,
        'suit': 'club',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3C.gif'
      },
      {
        'title': '4 of Clubs',
        'value': 4,
        'suit': 'club',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4C.gif'
      },
      {
        'title': '5 of Clubs',
        'value': 5,
        'suit': 'club',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5C.gif'
      },
      {
        'title': '6 of Clubs',
        'value': 6,
        'suit': 'club',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6C.gif'
      },
      {
        'title': '7 of Clubs',
        'value': 7,
        'suit': 'club',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7C.gif'
      },
      {
        'title': '8 of Clubs',
        'value': 8,
        'suit': 'club',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8C.gif'
      },
      {
        'title': '9 of Clubs',
        'value': 9,
        'suit': 'club',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9C.gif'
      },
      {
        'title': '10 of Clubs',
        'value': 10,
        'suit': 'club',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10C.gif'
      },
      {
        'title': 'J of Clubs',
        'value': 11,
        'suit': 'club',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JC.gif'
      },
      {
        'title': 'Q of Clubs',
        'value': 12,
        'suit': 'club',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QC.gif'
      },
      {
        'title': 'K of Clubs',
        'value': 13,
        'suit': 'club',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KC.gif'
      },
      {
        'title': 'Ace of Diamonds',
        'value': 1,
        'suit': 'diamond',
        'pokervalue': 14,
        'blackjackvalue': 11,
        'picture': 'AD.gif'
      },
      {
        'title': '2 of Diamonds',
        'value': 2,
        'suit': 'diamond',
        'pokervalue': 2,
        'blackjackvalue': 2,
        'picture': '2D.gif'
      },
      {
        'title': '3 of Diamonds',
        'value': 3,
        'suit': 'diamond',
        'pokervalue': 3,
        'blackjackvalue': 3,
        'picture': '3D.gif'
      },
      {
        'title': '4 of Diamonds',
        'value': 4,
        'suit': 'diamond',
        'pokervalue': 4,
        'blackjackvalue': 4,
        'picture': '4D.gif'
      },
      {
        'title': '5 of Diamonds',
        'value': 5,
        'suit': 'diamond',
        'pokervalue': 5,
        'blackjackvalue': 5,
        'picture': '5D.gif'
      },
      {
        'title': '6 of Diamonds',
        'value': 6,
        'suit': 'diamond',
        'pokervalue': 6,
        'blackjackvalue': 6,
        'picture': '6D.gif'
      },
      {
        'title': '7 of Diamonds',
        'value': 7,
        'suit': 'diamond',
        'pokervalue': 7,
        'blackjackvalue': 7,
        'picture': '7D.gif'
      },
      {
        'title': '8 of Diamonds',
        'value': 8,
        'suit': 'diamond',
        'pokervalue': 8,
        'blackjackvalue': 8,
        'picture': '8D.gif'
      },
      {
        'title': '9 of Diamonds',
        'value': 9,
        'suit': 'diamond',
        'pokervalue': 9,
        'blackjackvalue': 9,
        'picture': '9D.gif'
      },
      {
        'title': '10 of Diamonds',
        'value': 10,
        'suit': 'diamond',
        'pokervalue': 10,
        'blackjackvalue': 10,
        'picture': '10D.gif'
      },
      {
        'title': 'J of Diamonds',
        'value': 11,
        'suit': 'diamond',
        'pokervalue': 11,
        'blackjackvalue': 10,
        'picture': 'JD.gif'
      },
      {
        'title': 'Q of Diamonds',
        'value': 12,
        'suit': 'diamond',
        'pokervalue': 12,
        'blackjackvalue': 10,
        'picture': 'QD.gif'
      },
      {
        'title': 'K of Diamonds',
        'value': 13,
        'suit': 'diamond',
        'pokervalue': 13,
        'blackjackvalue': 10,
        'picture': 'KD.gif'
      }
    ];

    function shuffleDeck ( myArray ) {
      var i = myArray.length;
      if ( i == 0 ) return false;
      while ( --i ) {
         var j = Math.floor( Math.random() * ( i + 1 ) );
         var tempi = myArray[i];
         var tempj = myArray[j];
         myArray[i] = tempj;
         myArray[j] = tempi;
      }
      return myArray;
    }

    function switchDeck(type) {
      switch(type) {
        case 'pokertest':
          return pokertestdeck;
          break;
        case 'blackjacktest':
          return blackjacktestdeck;
          break;
        case 'default':
          return deck;
          break;
        default: return deck;
      }
    }

    function returnDeck(number, type) {
      var typeOfDeck = switchDeck(type);

      var newdeck = [];
      var combinedDecks = [];

      for (var i = 0; i < number; ++i) {
        newdeck[i] = $.extend(true, [], typeOfDeck);
        Array.prototype.push.apply(combinedDecks, newdeck[i]);
      }

      for (var j = 0; j < combinedDecks.length; j++) {
        combinedDecks[j].special = j+1;
      }
      return shuffleDeck(combinedDecks);
      //return combinedDecks;
    }
  }

})();
