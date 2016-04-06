(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('angularProject'));
    beforeEach(inject(function(_$controller_, _webDevTec_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });
  });
})();
