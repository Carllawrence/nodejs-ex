angular.module('starsApp').factory('Payslip', function ($resource) {
    return $resource('api/admin/payslips/:payslipId', {
      payslipId: '@_id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  })

