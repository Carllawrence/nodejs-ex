angular.module('starsApp').factory('Notice', function ($resource) {
    return $resource('api/notices/:noticeId', {
      noticeId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

