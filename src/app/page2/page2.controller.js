'use strict';

angular.module('hw5')
  .controller('page2Ctrl', function () {})

  .config(function ($stateProvider) {
    $stateProvider
      .state('main.page2',
      {
        url: 'page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'page2Ctrl'
      });

  });
