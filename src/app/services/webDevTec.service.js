(function() {
  'use strict';

  angular
      .module('angularProject')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Robot Toy',
        'uilink':'main.games.robot'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
