'use strict';

/*global alert*/

angular.module('hw5')
  .controller('loginCtrl', function ($scope, $state, authServ) {

    $scope.userName = '';

    $scope.login = function () {
      authServ.login($scope.userName).then(
        function () {
          $state.go('main');
        },
        function (error) {
          alert(error);
        }
      );
    };

  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('login',
      {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'loginCtrl',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'main'
          }
        }
      });
  });
