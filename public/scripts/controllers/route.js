angular.module('starsApp').controller('RouteController',

  function ($scope, $timeout, $http, $stateParams, $location, $state, AuthService, $rootScope) {

    $http.get('/api/profile').then(function (userData) {

      $timeout(function () {
        console.log(userData.data);

        if (userData.data == 0) {

          $state.go('apply');

        } else if (userData.data.status == 2 && userData.data.schoolYear != $rootScope.settings[0].schoolYear) {

          console.log('user is not registered');
          $state.go('registration');

        } else {

          //Route user to approprate state based on status
          switch (userData.data.status) {
            case 0:
              $state.go('application.start');
              break;
            case 1:
              $state.go('application.submitted');
              break;
            case 2:
              $state.go('dashboard.student');
              break;
            case 3:
              $state.go('dashboard.admin');
              break;
            case 4:
              $state.go('dashboard.staff');
              break;
            case 5:
              $state.go('dashboard.sysAdmin');
          }

        }

      }, 2000);


    });

  })
