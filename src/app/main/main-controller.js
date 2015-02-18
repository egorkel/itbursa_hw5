'use strict';

angular.module('hw5')
  .controller('mainCtrl', function ($scope, $state, authServ) {

  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('main',
      {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl',
        data: {
          permissions: {
            except: ['anonymous'],
            redirectTo: 'login'
          }
        }
      });
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState.name === 'main') {
        $state.go('main.page1');
      }
    });
  })

;
