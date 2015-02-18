'use strict';

angular.module('hw5')
  .controller('page1Ctrl', function () {
  })

  .config(function ($stateProvider, menuProvider) {
    var perms = ['user', 'admin'];

    $stateProvider
      .state('main.page1',
      {
        url: 'page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'page1Ctrl'
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
          state: 'main.page1',
          roles: perms
        },
        {
          name: 'Страница 2',
          state: 'main.page2',
          roles: perms
        }
      ]
    };

    menuProvider.add(menuItem);

  });
