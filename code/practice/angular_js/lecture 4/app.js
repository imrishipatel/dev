(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Rishi";
      $scope.sayHello = function () {
        return "Hi, this is a function!!!";
      };
    });
})();
