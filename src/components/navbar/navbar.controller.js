'use strict';

angular.module('hw5')
  .controller('navbarCtrl',
    function ($scope, menu, authServ, $state) {
      $scope.username = authServ.getUser();
      $scope.isCollapsed = true;

      $scope.perm = 0;
      $scope.items = menu.getItems().sort(function (item1, item2) {
        return item1.id - item2.id;
      });

      $scope.exit = function () {
        authServ.logout();
        $state.go('login');
      };
  })

  .run(function ($rootScope, authServ) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      ////Hide navbar when go to login page
      //$scope.hide = (toState.url === '/login');
      //
      ////Show 'admin' ref when admin logged in
      //if (authServ.isAdmin()) {
      //  $scope.perm = 2;
      //} else if (authServ.isUser()) {
      //  $scope.perm = 1;
      //} else {
      //  $scope.perm = 0;
      //}
    });
  })
;
