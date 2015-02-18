'use strict';

angular.module('hw5')
  .filter('permFilter', function () {
    return function (items, perm) {
      return _.reject(items, function (item) {
        return perm < item.permissions;
      });
    };
  });
