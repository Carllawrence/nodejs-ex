angular.module('starsApp').factory('User', function ($resource) {
    return $resource('api/appusers/:userId', {
      userId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });