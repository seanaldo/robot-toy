(function() {
  'use strict';

  angular
    .module('angularProject')
  /** @ngInject */

    .controller('CrapsController', function($scope, $user, $cookies, $compile, soccerTeams) {
      var vm = this;

      vm.teams = null; vm.week = 0; vm.games = []; vm.topScorer = []; vm.gameinfo = null;

      $scope.showModal = false;
      $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
      };

      activate()

      function activate() {
        vm.teams = soccerTeams.returnTeam();
        initFixtures();
      }

      function initFixtures() {
        //init fixture array for each team
        var a = 0;
        var maxIndex = vm.teams.length-1;
        var remaining = [];
        for (var b = 0; b < vm.teams.length; b++) {
          remaining.push(b);
        }
        vm.shuffledTeam = shuffler(vm.teams)
        angular.forEach(vm.shuffledTeam, function(team) {
          team.teamIndex = remaining[a];
          a++;
        })
        var j = 1;
        angular.forEach(vm.teams, function(team) {
          team.fixtures = [];
          //empty array
          if (team.teamIndex == maxIndex) {
            var halfTeam = vm.teams.length/2;
            team.fixtures.push({
              opponent: halfTeam,
              ground: null
            });
            for (var c = 1; c < halfTeam; c++) {
              team.fixtures.push({
                opponent: c,
                ground: null
              });
              var d = (c+halfTeam == team.teamIndex) ? 0 : c + halfTeam;
              team.fixtures.push({
                opponent: d,
                ground: null
              });
            }
          } else {
            for (var z = j; z < maxIndex; z++) {
              var k = (z == team.teamIndex) ? maxIndex : z;
              team.fixtures.push({
                opponent: k,
                ground: null
              });
            }
            for (var z = 0; z < j; z++) {
              var k = (z == team.teamIndex) ? maxIndex : z;
              team.fixtures.push({
                opponent: k,
                ground: null
              });
            }
            j = (j < 2) ? maxIndex : j-1;
          }
        })
        initGround();
        returnLeg();
      }

      function initGround() {
        angular.forEach(vm.teams, function(team) {
          for (var a = 0; a < team.fixtures.length; a++) {
            var opp = vm.teams.filter(function( obj ) {
              return obj.teamIndex == team.fixtures[a].opponent;
            });
            if (opp[0].fixtures[a].ground == null) {
              team.fixtures[a].ground = (Math.floor(Math.random()*2) == 0) ? 'H' : 'A';
            } else {
              team.fixtures[a].ground = (opp[0].fixtures[a].ground == 'A') ? 'H' : 'A';
            }
          }
        })
      }

      function returnLeg() {
        angular.forEach(vm.teams, function(team) {
          var copyFixture = angular.copy(team.fixtures);
          angular.forEach(copyFixture, function(fixture) {
            fixture.ground = (fixture.ground == 'A') ? 'H' : 'A';
          })
          team.fixtures = team.fixtures.concat(copyFixture);
        })
      }

      $scope.nextRound = function() {
        var used = [];
        vm.games = [];
        vm.gameinfo = null;
        angular.forEach(vm.teams, function(team) {
          var opponent = vm.teams.filter(function( obj ) {
            return obj.fixtures[vm.week].opponent == team.teamIndex;
          });
          if (team.fixtures[vm.week].ground == 'H' && used.indexOf(team.teamIndex) < 0 && used.indexOf(opponent[0].teamIndex) < 0) {
            used.push(team.teamIndex, opponent[0].teamIndex);
            vm.games.push({
              matchRound: vm.week,
              home: team,
              hometeam: team.teamName,
              homescore: Math.floor(Math.random() * 5),
              homescorer: [],
              homesquad: createTeam(team),
              away: opponent[0],
              awayteam: opponent[0].teamName,
              awayscore: Math.floor(Math.random() * 4),
              awayscorer: [],
              awaysquad: createTeam(opponent[0])
            })
            var thisGame = vm.games[vm.games.length-1];
            createScorers(thisGame, team, thisGame.homescore, thisGame.homescorer, thisGame.homesquad);
            createScorers(thisGame, opponent[0], thisGame.awayscore, thisGame.awayscorer, thisGame.awaysquad);
          }
        })
        vm.week++;
        updateTable();
      }

      function createTeam(thisTeam) {
        var team = [];
        var defNum = 0; var midNum = 0; var attNum = 0;
        var defLeft = 4; var midLeft = 4; var attLeft = 4;
        var b = 0; var c = 0; var d = 0;
        var gk = (Math.random() < 0.9) ? thisTeam.squad[0].gk[0] : thisTeam.squad[0].gk[1];
        team.push(gk);
        while (b < thisTeam.squad[1].def.length && defNum < 4) {
          if (Math.random() * 100 < thisTeam.squad[1].def[b].rating || defLeft >= thisTeam.squad[1].def.length) {
            team.push(thisTeam.squad[1].def[b]);
            defNum++;
          } else {
            defLeft++;
          }
          b++;
        }
        while (c < thisTeam.squad[2].mid.length && midNum < 4) {
          if (Math.random() * 100 < thisTeam.squad[2].mid[c].rating || midLeft >= thisTeam.squad[2].mid.length) {
            team.push(thisTeam.squad[2].mid[c]);
            midNum++;
          } else {
            midLeft++;
          }
          c++;
        }
        while (d < thisTeam.squad[3].att.length && attNum < 2) {
          if (Math.random() * 100 < thisTeam.squad[3].att[d].rating || attLeft >= thisTeam.squad[3].att.length) {
            team.push(thisTeam.squad[3].att[d]);
            attNum++;
          } else {
            attLeft++;
          }
          d++;
        }
        angular.forEach(team, function(player) {
          player.gs++;
          var rate = returnSkill(player.rating);
          player.r.push(rate);
        })
        return team;
      }

      function createScorers(thisGame, thisTeam, score, theScorer, squad) {
        for (var a = 0; a < score; a++) {
          var randomPick = Math.floor(Math.random() * 100);
          var scorer = '';
          if (randomPick < 10) {
            scorer = squad[Math.floor(Math.random() * 4 + 1)].name
          } else if (randomPick >= 10 && randomPick < 60) {
            scorer = squad[Math.floor(Math.random() * 4 + 5)].name
          } else {
            scorer = squad[Math.floor(Math.random() * 2 + 9)].name
          }
          var player = squad.filter(function( obj ) {
            return obj.name == scorer;
          });
          player[0].g++;
          theScorer.push({
            player: scorer,
            time: Math.floor(Math.random() * 90 + 1),
          })

          var exist = vm.topScorer.filter(function( obj ) {
            return obj.player == scorer;
          });
          if (exist.length > 0) {
            exist[0].goals++;
          } else {
            vm.topScorer.push({
              player: scorer,
              goals: 1,
              club: thisTeam.teamName
            })
          }
        }
      }

      function updateTable() {
        angular.forEach(vm.games, function(game) {
          if (game.homescore > game.awayscore) {
            pointsUpdate(game.home.league[0], 'win', game.homescore, game.awayscore);
            pointsUpdate(game.away.league[0], 'lose', game.awayscore, game.homescore);
          } else if (game.homescore < game.awayscore) {
            pointsUpdate(game.home.league[0], 'lose', game.homescore, game.awayscore);
            pointsUpdate(game.away.league[0], 'win', game.awayscore, game.homescore);
          } else {
            pointsUpdate(game.home.league[0], 'draw', game.homescore, game.awayscore);
            pointsUpdate(game.away.league[0], 'draw', game.awayscore, game.homescore);
          }
        })
      }

      function pointsUpdate(table, result, score, concede) {
        table.p++;
        table.gd += score - concede;
        table.f += score;
        table.a += concede;
        if (result == 'win') {
          table.w++;
          table.pt += 3;
        } else if (result == 'lose') {
          table.l++;
        } else {
          table.d++;
          table.pt++;
        }
      }

      function shuffler ( myArray ) {
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

      $scope.saveGameStats = function(game) {
        vm.gameinfo = game;
      }

      $scope.calculateAverage = function(array) {
        if (array.length > 0) {
          var sum = 0;
          for( var i = 0; i < array.length; i++ ){
            sum += parseInt( array[i] ); //don't forget to add the base
          }
          return parseFloat((sum/(array.length)).toFixed(1));
        } else {
          return;
        }
      }

      function returnSkill(rating) {
        var rate = 0;
        switch (true) {
          case rating > 90: 
            return(returnProb([8,16,30,65,88,98],[10,9,8,7,6,5,4]));
            break;
          case rating > 87: 
            return(returnProb([7,15,28,62,86,97],[10,9,8,7,6,5,4]));
            break;
          case rating > 84: 
            return(returnProb([6,14,26,59,84,96],[10,9,8,7,6,5,4]));
            break;
          case rating > 82: 
            return(returnProb([5,13,24,57,82,95],[10,9,8,7,6,5,4]));
            break;
          case rating > 80:
            return(returnProb([5,12,22,55,80,94],[10,9,8,7,6,5,4]));
            break;
          case rating > 70: 
            return(returnProb([2,8,18,50,75,88],[10,9,8,7,6,5,4]));
            break;
          case rating <= 70: 
            return(returnProb([0,4,10,30,65,80],[10,9,8,7,6,5,4]));
            break;
          default: return;
        }
      }

      function returnProb(odd, value) {
        var rand = Math.floor(Math.random() * 100);
        switch(true) {
          case rand < odd[0]:
            return value[0];
            break;
          case rand >= odd[0] && rand < odd[1]:
            return value[1];
            break;
          case rand >= odd[1] && rand < odd[2]:
            return value[2];
            break;
          case rand >= odd[2] && rand < odd[3]:
            return value[3];
            break;
          case rand >= odd[3] && rand < odd[4]:
            return value[4];
            break;
          case rand >= odd[4] && rand < odd[5]:
            return value[5];
            break;
          case rand >= odd[5]:
            return value[6];
            break;
          default: return value[0];
        }
      }
    })
})();
