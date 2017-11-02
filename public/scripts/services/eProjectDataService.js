angular.module('starsApp').factory('eProject', function ($resource) {
    return $resource('api/eprojects/:eprojectId', {
      eprojectId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

