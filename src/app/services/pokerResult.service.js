(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('pokerResult', pokerResult);

  /** @ngInject */
  function pokerResult() {

    this.processPokerStrength = processPokerStrength;
    this.returnTest = returnTest;

    function sortPokerHand(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }

    function resultsAggregator(flushCon, straightCon, pairsCon) {
      var advice = '';
      var score = 0;
      if (straightCon.chasing) {
        advice = 'Open ended straight chase. ';
      }
      if (flushCon.chasing) {
        advice = 'Chasing flush. ';
      }

      if (straightCon.royalflush) {
        return ['Royal Flush', 10000, ''];
      }
      if (straightCon.straightflush) {
        return [nameCleaner(straightCon.highest)+' High Straight Flush', 9000+straightCon.highest, ''];
      }
      if (pairsCon.verdict == 'quads') {
        score = 8000+(pairsCon.first * 10)+pairsCon.second;
        return ['Quads of '+nameCleaner(pairsCon.first)+' with a '+nameCleaner(pairsCon.second)+' kicker', score, ''];
      }
      if (pairsCon.verdict == 'full') {
        score = 7000+(pairsCon.first * 10)+pairsCon.second;
        return ['Full House with '+nameCleaner(pairsCon.first)+' and '+nameCleaner(pairsCon.second)+' kickers', score, ''];
      }
      if (flushCon.flush) {
        score = 6000;
        for (var a = 0; a < 5; a++) {
          score += flushCon.largest[a];
        }
        return [nameCleaner(flushCon.largest[0])+' High Flush of '+flushCon.suit+' with '+nameCleaner(flushCon.largest[1])+', '+nameCleaner(flushCon.largest[2])+', '+nameCleaner(flushCon.largest[3])+', '+nameCleaner(flushCon.largest[4]), score, ''];
      }
      if (straightCon.straight) {
        score = 5000+(straightCon.highest);
        return [nameCleaner(straightCon.highest)+' High Straight', score, ''];
      }
      if (pairsCon.verdict == 'trips') {
        score = 4000+(pairsCon.first * 50)+pairsCon.second+pairsCon.third;
        return ['Trip '+nameCleaner(pairsCon.first)+'s with '+nameCleaner(pairsCon.second)+' and '+nameCleaner(pairsCon.third)+' kickers', score, advice];
      }
      if (pairsCon.verdict == 'twopairs') {
        score = 3000+(pairsCon.first * 50)+(pairsCon.second*10)+pairsCon.third;
        return ['Two Pairs of '+nameCleaner(pairsCon.first)+'s and '+nameCleaner(pairsCon.second)+'s with a '+nameCleaner(pairsCon.third)+' kicker', score, advice];
      }
      if (pairsCon.verdict == 'onepair') {
        score = 2000+(pairsCon.first * 50)+pairsCon.second+pairsCon.third+pairsCon.fourth;
        return ['A Pair of '+nameCleaner(pairsCon.first)+'s with '+nameCleaner(pairsCon.second)+', '+nameCleaner(pairsCon.third)+', and '+nameCleaner(pairsCon.fourth)+' kickers', score, advice];
      }
      if (pairsCon.verdict == 'singles') {
        score = 1000+pairsCon.first+pairsCon.second+pairsCon.third+pairsCon.fourth+pairsCon.fifth;
        return [nameCleaner(pairsCon.first)+' high with '+nameCleaner(pairsCon.second)+', '+nameCleaner(pairsCon.third)+', '+nameCleaner(pairsCon.fourth)+', and '+nameCleaner(pairsCon.fifth)+' kickers', score, advice];
      }
    }

    function nameCleaner(value) {
      if (value == 14) {
        return 'Ace';
      } else if (value == 13) {
        return 'King'
      } else if (value == 12) {
        return 'Queen'
      } else if (value == 11) {
        return 'Jack'
      } else {
        return value;
      }
    }

    function processFlush(cards) {
      var Flush = [];
      var suitcount = [0,0,0,0];
      var flushCards = [];
      angular.forEach(cards, function(card){
        suitcount[0] += (card.suit == 'spade') ? 1 : 0;
        suitcount[1] += (card.suit == 'heart') ? 1 : 0;
        suitcount[2] += (card.suit == 'club') ? 1 : 0;
        suitcount[3] += (card.suit == 'diamond') ? 1 : 0;
      });
      var highest = Math.max.apply(Math, suitcount);
      var suitIndex = suitcount.indexOf(Math.max.apply(Math, suitcount));

      switch(suitIndex) {
        case 0:
          Flush.suit = 'spade';
          break;
        case 1:
          Flush.suit = 'heart';
          break;
        case 2:
          Flush.suit = 'club';
          break;
        case 3:
          Flush.suit = 'diamond';
          break;
        default: return;
      }

      angular.forEach(cards, function(card) {
        if (card.suit == Flush.suit) {
          flushCards.push(card.pokervalue);
        }
      })

      Flush.largest = flushCards.reverse();

      if (highest >= 5) {
        Flush.flush = true;
        Flush.chasing = false;
      } else if (highest >= 4) {
        Flush.flush = false;
        Flush.chasing = true;
      } else {
        Flush.flush = false;
        Flush.chasing = false;
      }
      return Flush;
    }

    function processStraight(straightcards) {
      var Straight = [];
      Straight.chasing = false;
      Straight.straight = false;
      Straight.royalflush = false;
      Straight.straightflush = false;
      Straight.highest = 0;
      var ace = false;
      var largestcon = 0;
      var consecutive = 0;
      var largestflush = 0;
      var flushtoo = 0;
      var tryfind = true;

      var cards = $.extend(true, [], straightcards);
      angular.forEach(cards, function(card) {
        if (card.pokervalue == 14) {
          var newcard = angular.copy(card);
          newcard.pokervalue = 1;
          cards.unshift(newcard);
        }
      });

      /////////
      for(var j = 0; j < cards.length - 3; j++) {
        var k = j;
        var consecutive = 1;
        var flushtoo = 1;
        var highestFlush = 0;
        var highestStraight = 0;
        var lastValue = 0
        var lastSuit = null
        do {
          var continueLoop = false;
          lastValue = cards[k].pokervalue;
          lastSuit = cards[k].suit;
          k++;
          if (cards[k]) {
            if (cards[k].pokervalue == lastValue+1) {
              consecutive++;
              highestStraight = (consecutive > 4) ? cards[k].pokervalue : highestStraight;
              continueLoop = true;
              if (cards[k].suit == lastSuit) {
                flushtoo++;
                if (flushtoo > 4) {
                  highestFlush = cards[k].pokervalue;
                }
              } else {
                flushtoo = 1;
              }
            }
          }
        } while (k < cards.length-1 && continueLoop);
        //still not exactly right
        if (consecutive == 4) {
          Straight.chasing = true;
        } else if (consecutive > 4) {
          Straight.highest = highestStraight;
          Straight.straight = true;
          if (highestFlush > 0) {
            if (highestFlush == 14) {
              Straight.royalflush = true;
            } else {
              Straight.straightflush = true;
            }
            Straight.highest = highestFlush;
          }
          break;
        }
      }
      return Straight;
    }

    function processPairs(cards) {
      var Duplicates = [];
      Duplicates.verdict = '';
      Duplicates.first = 0;
      Duplicates.second = 0;
      Duplicates.third = 0;
      Duplicates.fourth = 0;
      Duplicates.fifth = 0;
      var counter = {};
      var singles = [];
      var doubles = [];
      var trips = [];
      var quads = 0;
      for (var i = 0; i < cards.length; i += 1) {
          counter[cards[i].pokervalue] = (counter[cards[i].pokervalue] || 0) + 1;
      }

      //calculate duplicates
      for (var values in counter) {
        if (counter[values] >= 4) {
          quads = values;
        } else if (counter[values] >= 3) {
          trips.push(values);
          trips = trips.sort(function (a, b) { 
            return b - a;
          });
          if (trips.length == 2) {
            doubles.push(trips[1]);
            singles.push(trips[1]);
          }
        } else if (counter[values] >= 2) {
          doubles.push(values);
          doubles = doubles.sort(function (a, b) { 
            return b - a;
          });
          if (doubles.length === 3) {
            singles.push(doubles[2]);
            singles.push(doubles[2]);
          }
        } else {
          singles.push(values);
          singles = singles.sort(function (a, b) { 
            return b - a;
          });
        }
      }

      //determine strongest
      if (quads != 0) {
        Duplicates.verdict = 'quads';
        Duplicates.first = parseInt(quads) || 0;
        Duplicates.second = parseInt(singles[0]) || 0;
      }
      if (trips.length != 0) {
        if (doubles.length != 0) {
          Duplicates.verdict = 'full';
          Duplicates.first = parseInt(trips[0]) || 0;
          Duplicates.second = parseInt(doubles[0]) || 0;
        } else {
          Duplicates.verdict = 'trips';
          Duplicates.first = parseInt(trips[0]) || 0;
          Duplicates.second = parseInt(singles[0]) || 0;
          Duplicates.third = parseInt(singles[1]) || 0;
        }
      } else {
        if (doubles.length != 0) {
          if (doubles.length >= 2) {
            Duplicates.verdict = 'twopairs';
            Duplicates.first = parseInt(doubles[0]) || 0;
            Duplicates.second = parseInt(doubles[1]) || 0;
            Duplicates.third = parseInt(singles[0]) || 0;
          } else {
            Duplicates.verdict = 'onepair';
            Duplicates.first = parseInt(doubles[0]) || 0;
            Duplicates.second = parseInt(singles[0]) || 0;
            Duplicates.third = parseInt(singles[1]) || 0;
            Duplicates.fourth = parseInt(singles[2]) || 0;
          }
        } else {
            Duplicates.verdict = 'singles';
            Duplicates.first = parseInt(singles[0]) || 0;
            Duplicates.second = parseInt(singles[1]) || 0;
            Duplicates.third = parseInt(singles[2]) || 0;
            Duplicates.fourth = parseInt(singles[3]) || 0;
            Duplicates.fifth = parseInt(singles[4]) || 0;
        }
      }
      return Duplicates;
    }

    function processPokerStrength(hand, tablehand) {
        var Strength = [];
        var tempHand = [];
        var finalHand = [];
        var results = [];
        var flushCon = []; var straightCon = []; var pairsCon = [];

        if (hand && hand.cards && hand!= undefined) {
          if (hand.cards.length <= 2) {
            if (tablehand && tablehand.cards) {
              var tempHand = hand.cards.concat(tablehand.cards);
            }
            finalHand = sortPokerHand(tempHand, 'pokervalue');
          } else {
            finalHand = sortPokerHand(hand.cards, 'pokervalue');
          }
          //assess strength 
          if ( finalHand ) {
            //flush
            flushCon = processFlush(finalHand);
            //straight
            if (finalHand.length >= 5) {
              straightCon = processStraight(finalHand);
            }
            //quad
            pairsCon = processPairs(finalHand);

            results = resultsAggregator(flushCon, straightCon, pairsCon);
            Strength.verdict = results[0];
            Strength.rating = results[1];
            Strength.advice = results[2];
          }
          //assign verdict and rating
        }
        return Strength;
      }
    

    function returnTest() {
      var test = [
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
        }
      ];
      var test2 = [
        {
          'title': '6 of Clubs',
          'value': 6,
          'suit': 'club',
          'pokervalue': 6,
          'blackjackvalue': 6,
          'picture': '6C.gif'
        },
        {
          'title': '7 of Spades',
          'value': 7,
          'suit': 'spade',
          'pokervalue': 7,
          'blackjackvalue': 7,
          'picture': '7S.gif'
        }
      ];
      var thishand = [];
      var tablehand = [];
      thishand.cards = test2;
      tablehand.cards = test;
      
      console.log(processPokerStrength(thishand, tablehand));
    }
  }

})();
