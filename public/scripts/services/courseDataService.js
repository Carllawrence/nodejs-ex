angular.module('starsApp').factory('Course', function ($resource) {
    return $resource('api/courses/:courseId', {
      courseId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

