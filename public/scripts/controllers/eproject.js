'use strict';
/**
 * MainCtrl
 */
angular.module('starsApp')
  .controller('eProjectController', function ($rootScope,$stateParams, eProject, $uibModal, $filter, User, $scope, $state, $http, AuthService) {

    eProject.query(function (response) {
      $scope.eProjects = response;
    });

    var id = $stateParams.eprojectId;
    
    if (id) {
      $http.get('/api/eprojects/' + id).then(function (result) {
        console.log(result);
        $scope.currentProject = result.data;
      });
    }

    var $ctrl = this;
    $scope.open = function (template, size, id, title) {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        keyboard: false,
        backdrop: false,
        templateUrl: template,
        size: size,
        controller: function ($scope, $uibModalInstance, eProject, $timeout, $http, $sce, $state) {

          
          $scope.close = function () {
            $uibModalInstance.close('close');
          };
          // create a new event locally save it remotely
          $scope.submit = function (project) {

            var newProject = new eProject({
              title: project.title,
              why: project.why,
              how: project.how,
              what: project.what,
              department: $rootScope.currentUser.department,
              option: $rootScope.currentUser.option,
              studentFname: $rootScope.currentUser.firstname,
              studentLname: $rootScope.currentUser.lastname,
              studentId: $rootScope.currentUser.id,
              picUrl: $rootScope.currentUser.picUrl,
              score: Number,            });
            newProject.$save();
            $scope.project = '';
            $scope.close();
            $state.reload();
          };

          // remove event locally and remotely
          $scope.delProject = function () {
            $http.delete('/api/eprojects/' + id).then(function (Response) {
              console.log(Response);
              $scope.close();
              $state.reload();
            });
          };

        }

      });
    }


  });

