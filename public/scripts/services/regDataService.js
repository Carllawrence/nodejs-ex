angular.module('starsApp').factory('Registration', function ($resource) {
    return $resource('api/Registrations/:registrationId', {
      registrationId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

