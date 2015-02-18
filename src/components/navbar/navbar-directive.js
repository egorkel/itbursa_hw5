'use strict';

angular.module('hw5')
  .directive('navBar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: 'navbarCtrl'
    };
  });
