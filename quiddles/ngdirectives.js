angular.module('proseminar', [])
    .controller('NgDirectivesCtrl', function($scope){
        $scope.todos = [
            {text: 'Abspuelen', done: false},
            {text: 'Mails schreiben', done: false}, 
            {text: 'Mit Proseminar anfangen', done: false}
        ];
        $scope.aufschieben = function(){
            $scope.todos = [];
        };
        $scope.weghier = function(){
            $scope.successimg = 'img/nothingtodo.gif';
        };
    });
