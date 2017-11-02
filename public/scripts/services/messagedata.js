angular.module('starsApp').factory('Message', function ($resource) {
    return $resource('api/messages/:messageId', {
      messageId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

