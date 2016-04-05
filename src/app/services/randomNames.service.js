(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('randomNames', randomNames);

  /** @ngInject */
  function randomNames() {
    var nameStore = [
      {
        "name": "Stein"
      },
      {
        "name": "Cheryl"
      },
      {
        "name": "Faulkner"
      },
      {
        "name": "Doris"
      },
      {
        "name": "Penny"
      },
      {
        "name": "Mccullough"
      },
      {
        "name": "Cindy"
      },
      {
        "name": "Cathryn"
      },
      {
        "name": "Estelle"
      },
      {
        "name": "Ramona"
      },
      {
        "name": "Debra"
      },
      {
        "name": "Velazquez"
      },
      {
        "name": "Chrystal"
      },
      {
        "name": "Lindsey"
      },
      {
        "name": "Katina"
      },
      {
        "name": "Mcdaniel"
      },
      {
        "name": "Santiago"
      },
      {
        "name": "Kara"
      },
      {
        "name": "Eunice"
      },
      {
        "name": "Beryl"
      },
      {
        "name": "Katrina"
      },
      {
        "name": "Hilda"
      },
      {
        "name": "Chandler"
      },
      {
        "name": "Carlson"
      },
      {
        "name": "Stevens"
      },
      {
        "name": "Jenna"
      },
      {
        "name": "Duke"
      },
      {
        "name": "Brandy"
      },
      {
        "name": "Watkins"
      },
      {
        "name": "Millicent"
      },
      {
        "name": "Delacruz"
      },
      {
        "name": "Bryan"
      },
      {
        "name": "Tucker"
      },
      {
        "name": "Ferguson"
      },
      {
        "name": "Murphy"
      },
      {
        "name": "Alejandra"
      },
      {
        "name": "Bond"
      },
      {
        "name": "Mills"
      },
      {
        "name": "Grant"
      },
      {
        "name": "Nichols"
      },
      {
        "name": "Krista"
      },
      {
        "name": "Kelley"
      },
      {
        "name": "Harrington"
      },
      {
        "name": "Noel"
      },
      {
        "name": "Holman"
      },
      {
        "name": "Sheri"
      },
      {
        "name": "Smith"
      },
      {
        "name": "Rose"
      },
      {
        "name": "Vincent"
      },
      {
        "name": "Leticia"
      },
      {
        "name": "Farrell"
      },
      {
        "name": "Jeanie"
      },
      {
        "name": "Paul"
      },
      {
        "name": "Michael"
      },
      {
        "name": "Alissa"
      },
      {
        "name": "Mercer"
      },
      {
        "name": "Magdalena"
      },
      {
        "name": "Gay"
      },
      {
        "name": "Phelps"
      },
      {
        "name": "Alyssa"
      },
      {
        "name": "Mayra"
      },
      {
        "name": "Mcgee"
      },
      {
        "name": "Phoebe"
      },
      {
        "name": "Latoya"
      },
      {
        "name": "Bethany"
      },
      {
        "name": "Hayes"
      },
      {
        "name": "Guadalupe"
      },
      {
        "name": "Angelia"
      },
      {
        "name": "Crawford"
      },
      {
        "name": "Hooper"
      },
      {
        "name": "Contreras"
      },
      {
        "name": "Ortiz"
      },
      {
        "name": "Mccoy"
      },
      {
        "name": "Salas"
      },
      {
        "name": "Cherie"
      },
      {
        "name": "Mack"
      },
      {
        "name": "Norton"
      },
      {
        "name": "Bruce"
      },
      {
        "name": "Mcguire"
      },
      {
        "name": "Peters"
      },
      {
        "name": "Kitty"
      },
      {
        "name": "Malinda"
      },
      {
        "name": "Liz"
      },
      {
        "name": "Carlene"
      },
      {
        "name": "Shawna"
      },
      {
        "name": "Rich"
      },
      {
        "name": "Marisol"
      },
      {
        "name": "Singleton"
      },
      {
        "name": "Robbins"
      },
      {
        "name": "Allyson"
      },
      {
        "name": "Figueroa"
      },
      {
        "name": "Gibbs"
      },
      {
        "name": "Hoover"
      },
      {
        "name": "Schroeder"
      },
      {
        "name": "Hines"
      },
      {
        "name": "Haley"
      },
      {
        "name": "Florine"
      },
      {
        "name": "Gould"
      },
      {
        "name": "Carmela"
      },
      {
        "name": "Julia"
      }
    ];

    this.returnNames = returnNames;

    function returnNames(number) {
      var names = [];
      while (names.length < number) {
        var thisName = nameStore[Math.floor(Math.random()*nameStore.length)].name;
        if (names.indexOf(thisName) < 0) {
          names.push(thisName);
        }
      }
      return names;
    }
  }

})();
