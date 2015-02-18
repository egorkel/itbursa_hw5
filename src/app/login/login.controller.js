'use strict';

angular.module('hw5')
  .controller('loginCtrl', function ($scope, $state, authServ) {

    $scope.userName = '';

    $scope.login = function () {
      authServ.login($scope.userName).then(
        function () {
          $state.go('page1');
        },
        function (error) {
          alert(error);
        }
      );
    };

  })

  .config(function ($stateProvider, menuProvider) {
    $stateProvider
      .state('login',
      {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'loginCtrl',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'page1'
          }
        }
      });

    menuProvider.add(4, 'Выход', 'login', 1);

  });
