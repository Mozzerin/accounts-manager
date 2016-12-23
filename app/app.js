var app = angular.module('socialNetwork', ['sn-directives']);


app.controller('CompaniesController', ['$http', function ($http) {
    var companies = this;
    companies.company = [];

    $http.get('/companies.json').success(function (data) {
        companies.company = data;
    });
}]);

