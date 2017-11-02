angular.module('starsApp').factory('Assignment', function ($resource) {
    return $resource('api/assignments/:assignmentId', {
      assignmentId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

