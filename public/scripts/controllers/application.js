'use strict';
/**
 * for managing student applications
 */
angular.module('starsApp')
  .controller('ApplicationsController', function ($rootScope, WizardHandler, $element, $filter, $uibModal, Upload, Payslip, $scope, newApp, $state, $http, AuthService, $timeout, Application, User, filterFilter, $location) {

    $scope.personalInfo = [];

    $scope.today = new Date();

    $scope.getUpdatedApplication = function () {

      $http.get('/api/applications/' + $rootScope.currentUser._id)
        .then(function (response) {

          if (response.data.length == 0) {
            console.log('no application found for this user');
            $scope.personalInfo = {
              firstname: $rootScope.currentUser.firstname,
              lastname: $rootScope.currentUser.lastname,
              email: $rootScope.currentUser.username,
              userid: $rootScope.currentUser._id,
              picUrl: null,
              other: null,
              tel: null,
              maritalStatus: 1,
              gender: 1,
              id: null,
              uuid: null,
              schoolYear: $rootScope.settings.schoolYear,
              DOB: null,
              POB: null,
              nationality: null,
              decision: null,
              comments: null,
              idnum: null,
              issued: null,
              address: null,
              status: 0,
              academics: [{ name: null, dept: null, grade: null, aggregate: null, examAuth: null },],
              orgs: [],
              refs: [{ name: null, occupation: null, tel: null, email: null },],
              docs: [{ name: 'Transcripts of the last three years',required:true, url:null, progress:null, status: 'Not Added' },
              { name: 'National identity card',required:false, url: null, progress: null, status: 'Not Added' },
              { name: 'Coloured passport size photo', required:true, url: null, progress: null, status: 'Not Added' },
              { name: 'Itorero/ Ingando certificate', required:false, url: null, progress: null, status: 'Not Added' },
              { name: 'Notarised secondary school certificate', required:true, url: null, progress: null, status: 'Not Added' }],
              father: { name: null, number: null, id: null },
              mother: { name: null, number: null, id: null },
              guardian: { name: null, number: null, id: null },
              choice: [],
              deptOption: [{ DEPARTMENT: 'MECHANICAL ENGINEERING', OPTION: 'Automobile   Technology' },
              { DEPARTMENT: 'MECHANICAL ENGINEERING', OPTION: 'Production Technology' },
              { DEPARTMENT: 'INFORMATION TECHNOLOGY', OPTION: 'IT' },
              { DEPARTMENT: 'CIVIL ENGINEERING', OPTION: 'Construction Technology' },
              { DEPARTMENT: 'CIVIL ENGINEERING', OPTION: 'Land Surveying' },
              { DEPARTMENT: 'HOSPITALITY', OPTION: 'Front office' },
              { DEPARTMENT: 'HOSPITALITY', OPTION: 'Housekeeping' },
              { DEPARTMENT: 'HOSPITALITY', OPTION: 'Culinary Arts' },
              ],
            }
          } else {

            $scope.personalInfo = response.data[0];
            $scope.personalInfo.DOB = new Date($scope.personalInfo.DOB);

            for (var i = 0; i < $scope.personalInfo.orgs.length; i++) {
              $scope.personalInfo.orgs[i].start = new Date($scope.personalInfo.orgs[i].start);
              $scope.personalInfo.orgs[i].end = new Date($scope.personalInfo.orgs[i].end);
            }

            $http.get('/api/payslips/' + $scope.personalInfo.uuid).then(function (result) {

              $scope.payments = result.data;
              var balance = 0;

              for (var i = 0; i < result.data.length; i++) {
                var credit = result.data[i].credit.replace(",", ".");
                var balanceCredit = parseFloat(credit, 10);
                balance = balance + balanceCredit;
              }

              if (balance >= 5000 && $scope.personalInfo.status == 2) {
                $scope.personalInfo.status = 3;
                Application.update($scope.personalInfo);
              }

              $scope.balance = balance;
            })

          }
        });

    }

    $scope.getUpdatedApplication();

    if ($rootScope.currentUser.status == 0) {
      $http.get('assets/countryData.json').then(function (result) {
        $scope.countries = result.data;
      });

      $http.get('assets/rwandaData.json').then(function (result) {
        $scope.rwandaData = result.data;
      });

      $scope.opened = {};

      // remove user
      $scope.removeAcademic = function (index) {
        $scope.personalInfo.academics.splice(index, 1);
      };

      $scope.removeFile = function (index, upDocName) {
        $scope.personalInfo.docs[index] = { name: upDocName, url: null, progress: 'Not Added' }
        Application.update($scope.personalInfo);

      };

      $scope.addAcademics = function () {
        $scope.inserted = {
          id: $scope.personalInfo.academics.length + 1,
          name: '',
          dept: null,
          grade: null,
          aggregate: null,
          examAuth: null
        };
        $scope.personalInfo.academics.push($scope.inserted);
      };

      // remove user
      $scope.removeRef = function (index) {
        $scope.personalInfo.refs.splice(index, 1);
      };

      $scope.addRef = function () {
        $scope.inserted = {
          id: $scope.personalInfo.refs.length + 1,
          name: null,
          ocupation: null,
          tel: null,
          email: null
        };
        $scope.personalInfo.refs.push($scope.inserted);
      };


      // remove org
      $scope.removeOrg = function (index) {
        $scope.personalInfo.orgs.splice(index, 1);
      };

      $scope.addOrg = function () {
        $scope.inserted = {
          id: $scope.personalInfo.orgs.length + 1,
          name: '',
          description: null,
          start: new Date(),
          end: new Date()
        };
        $scope.personalInfo.orgs.push($scope.inserted);
      };

      $scope.open = function ($event, elementOpened) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened[elementOpened] = !$scope.opened[elementOpened];
      };

      $scope.genders = [
        { value: 1, text: 'Female' },
        { value: 2, text: 'Male' },
      ];

      $scope.mStatuses = [
        { value: 1, text: 'Single' },
        { value: 2, text: 'Married' },
        { value: 3, text: 'Divorced' },
        { value: 4, text: 'Never Married' }
      ];

      $scope.showStatus = function () {
        var selected = $filter('filter')($scope.mStatuses, { value: $scope.personalInfo.maritalStatus });
        return ($scope.personalInfo.maritalStatus && selected.length) ? selected[0].text : 'Not Selected';
      };

      $scope.showGender = function () {
        var selected = $filter('filter')($scope.genders, { value: $scope.personalInfo.gender });
        return ($scope.personalInfo.gender && selected.length) ? selected[0].text : 'None Selected';
      };

      $scope.validateApplication = function () {

        if ($scope.personalInfo.choice.length == 0) {
          return $scope.applicationErrorMsg = 'You have to select at least one discipline!';
        }

        if ($scope.personalInfo.academics.length < 1) {
          return $scope.applicationErrorMsg = 'Your academic history cannot be empty';
        }

        if ($scope.personalInfo.refs.length < 2) {
          return $scope.applicationErrorMsg = 'not enough references. You need 3 or more references';
        }

      }

      $scope.submitApplication = function () {
        $scope.applicationErrorMsg = '';
        $scope.applicationStatusMsg = '';
        $http.get('/api/applications/' + $rootScope.currentUser._id)
          .then(function (response) {
            if (response.data == 0) {

              $scope.personalInfo.status = 1;

              var newApplication = new newApp($scope.personalInfo);
              console.log('submitting new applications')
              newApplication.$save();
              $http.put('/api/appusers/' + $rootScope.currentUser._id, $scope.personalInfo.address);
              $http.put('/api/appusers/' + $rootScope.currentUser._id, { department: $scope.personalInfo.choice[0].DEPARTMENT, telephone: $scope.personalInfo.tel, option: $scope.personalInfo.choice[0].OPTION });

              $scope.applicationStatusMsg = 'Your application has been created and your data has been saved. Loading Documents...';

            } else {

              console.log('submitting existing applications')
              $scope.personalInfo.status = 1;

              Application.update($scope.personalInfo);

              $http.put('/api/appusers/' + $rootScope.currentUser._id, $scope.personalInfo.address);

              $http.put('/api/appusers/' + $rootScope.currentUser._id, { department: $scope.personalInfo.choice[0].DEPARTMENT, option: $scope.personalInfo.choice[0].OPTION });
              $scope.applicationStatusMsg = 'Your application data has been updated.';

            }

          });

      };

      $scope.addApplication = function () {
        $http.put('/api/appusers/' + $rootScope.currentUser._id, { status: 1 });
        $scope.personalInfo.status = 4;
        Application.update($scope.personalInfo);
        $timeout(function () {
          $state.go('application.submitted');
        }, 2000);
      }

      $scope.$watch('files', function () {
        $scope.upload($scope.files);
      });

$scope.checkFiles = function(){
        
if($scope.personalInfo.docs.length < 4)
          { 
        $scope.fileUploadSizeMsg = 'All documents must be uploaded to continue';
          } 
}

      $scope.$watch('file', function () {
        if ($scope.file != null) {
          $scope.files = [$scope.file];
        }
      });
      var $ctrl = this;

      $scope.upload = function (files, upDocName, index) {
        if (files && files.length) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            console.log(file.size);
            if (file.size < 5000000 && !file.$error) {
              Upload.upload({
                url: '/upload/',
                data: {
                  name: upDocName,
                  file: file
                }
              }).then(function (resp) {

                if (upDocName == 'Coloured passport size photo') {
                  //User.update($rootScope.currentUser._id, {picUrl:file.name});
                  $http.put('/api/appusers/' + $rootScope.currentUser._id, { picUrl: file.name });
                }
                $scope.personalInfo.picUrl = file.name;
                $scope.personalInfo.docs[index] = { name: upDocName, url: file.name, progress: 'OK' };
                Application.update($scope.personalInfo);
              });
            } else {
              $scope.filename = file.name;
              $scope.fileUploadMsg = "file is too large";
            }
          }
        }
      }
    } else {
      $state.go('application.submitted');
    };

  });

