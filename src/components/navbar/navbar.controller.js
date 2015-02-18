'use strict';

angular.module('hw5')
  .controller('navbarCtrl',
    function ($scope, menu, authServ, $state) {
      $scope.username = authServ.getUser();
      $scope.role = authServ.getRole();

      $scope.dd = false;
      //$scope.perm = 0;

      $scope.items = menu.getItems().sort(function (item1, item2) {
        return item1.position - item2.position;
      });

      $scope.exit = function () {
        authServ.logout();
        $state.go('login');
      };
  });
