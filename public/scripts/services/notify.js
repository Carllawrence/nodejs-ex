angular.module('starsApp').factory('Notify', function ($resource) {
    return $resource('api/notifications/:notifyId', {
      notifyId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

