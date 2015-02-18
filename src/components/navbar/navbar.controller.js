'use strict';

angular.module('hw5')
  .controller('navbarCtrl',
    function ($scope, menu, authServ, $state) {
      $scope.username = authServ.getUser();
      $scope.role = authServ.getRole();

      $scope.items = menu.getItems().sort(function (item1, item2) {
        return item1.position - item2.position;
      });

      $scope.exit = function () {
        authServ.logout();
        $state.go('login');
      };

      var checkRoles = function (roles) {
        return _.findIndex(roles, function (role) {
            return role === $scope.role;
          }) !== -1;
      };

      $scope.singleItem = function (items) {
        return items.length === 1 &&
          checkRoles(items[0].roles);
      };

      $scope.ddItem = function (items) {
        return items.length > 1 &&
          checkRoles(items[0].roles);
      };
  });
