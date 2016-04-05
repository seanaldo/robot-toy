/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularProject')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .value('$user', {
    	bankBalance: 1000,
    	loanBalance: 0,
    	interestBalance: 0,
        pokerChips: 0
    });

})();
