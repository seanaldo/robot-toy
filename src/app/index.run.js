(function() {
  'use strict';

  angular
    .module('angularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
