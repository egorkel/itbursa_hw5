'use strict';

angular.module('hw5')
  .controller('adminCtrl', function () {})

  .config(function ($stateProvider, menuProvider) {
    var perms = ['admin'];

    $stateProvider
      .state('main.admin',
      {
        url: 'admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'adminCtrl',
        data: {
          permissions: {
            only: perms,
            redirectTo: 'login'
          }
        }
      });

    var menuItem = {
      position: 2,
      items: [
        {
          name: 'Админ',
          state: 'admin',
          roles: perms
        }
      ]
    };

    menuProvider.add(menuItem);

  });
