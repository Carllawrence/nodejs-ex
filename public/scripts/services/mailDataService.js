angular.module('starsApp').factory('Mail', function ($resource) {
    return $resource('api/mails/:mailId', {
      mailId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

