'use strict';

angular.module('hw5')
  .factory('authServ', function ($window, $q) {
    return {

      login: function (username) {
        return $q(function (resolve, reject) {
          if (username) {
            $window.localStorage.setItem('username', username);
            resolve();
          } else {
            reject('Bad username');
          }
        });

      },

      logout: function () {
        $window.localStorage.setItem('username', '');
      },

      isUser: function () {
        return !!$window.localStorage.getItem('username');
      },

      isAdmin: function () {
        return $window.localStorage.getItem('username') === 'admin';
      },

      getUser: function () {
        return $window.localStorage.getItem('username');
      },

      getRole: function () {
        var role = 'anonymous';
        if (!!$window.localStorage.getItem('username')) {
          role = 'user';
          if ($window.localStorage.getItem('username') === 'admin') {
            role = 'admin';
          }
        }

        return role;
      }

    };
  });
