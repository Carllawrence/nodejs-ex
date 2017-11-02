angular.module('starsApp').factory('Setting', function ($resource) {
    return $resource('api/settings/:settingId', {
      settingId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

 