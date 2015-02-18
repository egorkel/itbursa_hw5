'use strict';

angular.module('hw5')
  .provider('menu', function () {
    var items = [];

    this.$get = function () {
      return {
        getItems: function () {
          return items;
        }
      };
    };

    this.add = function(menuItem) {
      //var newItem = {
      //  id: id,
      //  name: name,
      //  state: state,
      //  permissions: perm
      //};
      //items.push(newItem);
    };
  });
