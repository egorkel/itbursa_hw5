'use strict';

angular.module('hw5')
  .controller('page1Ctrl', function () {})

  .config(function ($stateProvider, menuProvider) {
    var perms = ['user', 'admin'];

    $stateProvider
      .state('page1',
      {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'page1Ctrl',
        data: {
          permissions: {
            only: perms,
            redirectTo: 'login'
          }
        }
      });

    var menuItem = {
      position: 1,
      items: [
        {
          name: 'Страницы',
          state: '',
          roles: perms
        },
        {
          name: 'Страница 1',
          state: 'page1',
          roles: perms
        },
        {
          name: 'Страница 2',
          state: 'page2',
          roles: perms
        }
      ]
    };

    menuProvider.add(menuItem);

  });
