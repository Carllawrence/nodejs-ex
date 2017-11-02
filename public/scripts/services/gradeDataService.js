angular.module('starsApp').factory('Grade', function ($resource) {
    return $resource('api/grades/:gradeId', {
      gradeId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

