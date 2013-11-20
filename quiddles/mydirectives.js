angular.module('proseminar', [])
    .controller('MyDirectivesCtrl', function($scope){
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre',
            email: 'naomi@example.com'
        };
    })
    .directive('email', function() {
        return {
          template: 'Email: {{customer.email}}'
        };
    })
    .directive('mykunde', function() {
        return {
          restrict: 'E',
          template: 'Name: <b>{{customer.name}}</b>' 
            + 'Address: {{customer.address}}'
        };
    });
