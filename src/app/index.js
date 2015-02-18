'use strict';

angular.module('hw5', ['ui.router', 'ui.bootstrap', 'permission'])

  .run(function (Permission, authServ, $rootScope, $state) {
    // Определяем роли пользователей
    Permission.defineRole('anonymous', function () {
      return !authServ.isUser();
    });

    Permission.defineRole('user', function () {
      return authServ.isUser();
    });

    Permission.defineRole('admin', function () {
      return authServ.isAdmin();
    });

    // При нарушении прав доступа разлогиниваемся
    $rootScope.$on('$stateChangePermissionDenied', function () {
      authServ.logout();
      $state.go('login');
    });

  })

  // Стейт по умолчанию
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      $injector.invoke(function ($state) {
        $state.go('login');
      });
    });
  })
;
