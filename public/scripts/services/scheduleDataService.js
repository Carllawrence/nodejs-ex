angular.module('starsApp').factory('Schedule', function ($resource) {
    return $resource('api/schedules/:scheduleId', {
      scheduleId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

