(function(){

'use strict';

angular.module('zebraTestApp')
  .factory('Data', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
  
}());
