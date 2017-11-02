'use strict';
/**
 * MainCtrl
 */
angular.module('starsApp')
    .controller('CalendarController', function ($rootScope, Setting, $uibModal, $filter, User, $scope, $state, $http, AuthService) {


        $scope.changeMode = function (mode) {
            $scope.mode = mode;
        };

        Setting.query(function (result) {
            $scope.test = result[0];
            var title = $scope.test.schoolYear;
            var startDate = new Date($scope.test.startDate);
            var endDate = new Date($scope.test.endDate);
            var startTime = startDate.toUTCString();
            var endTime = endDate.toUTCString();
            var semStart = new Date($scope.test.semesterStart);
            var semEnd = new Date($scope.test.semesterEnd);
            //var semStart = semStart.toUTCString();
            //var semEnd = semEnd.toUTCString();

            $scope.eventSource = [{
                title: title,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            }, {
                title: 'Semester',
                startTime: semStart,
                endTime: semEnd,
                allDay: false
            },];

        });

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
            controller: function ($scope, $uibModalInstance, Event, $timeout, $http, $sce, $state) {
       
       Event.query(function (response) {
          $scope.events = response;
        });
              $scope.close = function () {
                $uibModalInstance.close('close');
              };
              // create a new event locally save it remotely
              $scope.submit = function (event, file) {
                file.upload = Upload.upload({
                  url: '/upload/',
                  data: { file: file },
                });
    
                file.upload.then(function (response) {
                  $timeout(function () {
                    $scope.profileFilename = file.name;
                    file.result = response.data;
                    var newEvent = new Event({
                        title: title,
                        startTime: startTime,
                        endTime: endTime,
                        allDay: true,
                      picUrl: $scope.profileFilename
                    });
                    newEvent.$save();
    
                    $scope.newEvent = '';
                    $scope.event = '';
    
    
                  });
                }, function (response) {
                  if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                  // Math.min is to fix IE which reports 200% sometimes
                  file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
                $scope.close();
                   $state.reload();
              };
    
              // remove event locally and remotely
              $scope.delEvent = function () {
                $http.delete('/api/events/' + id).then(function (Response) {
                  console.log(Response);
                  $scope.close();
                  $state.reload();
                });
              };
    
            }
    
          });
        }
    

    });

