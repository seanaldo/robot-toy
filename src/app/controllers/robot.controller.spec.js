(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('angularProject'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('RobotController');
    }));

    it('should create a table with dimensions of 5 by 5', function() {
      expect(vm.table.length == 5).toBeTruthy();
      expect(vm.table[0].length == 5).toBeTruthy();
    });

    /*it('should move forward when move button is clicked', function() {
        var data = $scope.move();
        expect(vm.robotPosition).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
    });

    it('should rotate right when right button is clicked ', function() {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    });

    it('should rotate left when left button is clicked', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });*/
  });
})();
