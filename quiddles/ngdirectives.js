angular.module('proseminar', [])
    .controller('NgDirectivesCtrl', function($scope){
        $scope.todolist = [
            {text: 'Abspuelen', done: false},
            {text: 'Mails schreiben', done: false}, 
            {text: 'Mit Proseminar anfangen', done: false}
        ];
        $scope.remaining = function(){
            return $scope.todolist.filter(
              function(item){return !item.done});
        };
        $scope.weghier = function(){
            $scope.successimg = 'img/nothingtodo.gif';
        };
    });
