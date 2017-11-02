angular.module('starsApp').factory('Video', function ($resource) {
    return $resource('api/videos/:videoId', {
      mailId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

