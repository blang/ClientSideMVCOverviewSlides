angular.module('proseminar', [])
    .controller('MyDirectivesCtrl', function($scope){
        $scope.naomi = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    })
    .directive('kinfo', function() {
        return {
          restrict: 'E',
          scope: {
            kunde: '=' 
          },
          template: 'Name: <b>{{kunde.name}}</b><br />' 
            + 'Adresse: {{kunde.address}}'
        };
    });
