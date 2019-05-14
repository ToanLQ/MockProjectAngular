var app = angular.module('myApp', ['ui.router']);
  
app.controller('TableController', function($scope, $http) {
    $http.get("messages.json").then(function(response) {
        $scope.myData = response.data.users;
    });
});


app.filter('inbox1', function(){
  return function(item){
    return  item.folder ==='inbox' && item.to === 'myself@angular.dev' ;
  }  
}); 
        
// app.controller('myCtrl', function($scope) {
//     $scope.showMe = false;
//     $scope.myFunc = function() {
//         $scope.showMe = !$scope.showMe;
//     }
// });


app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function ($stateProvider, $urlRouterProvider,$locationProvider) {

        //$locationProvider.html5Mode({enabled:false});
        $urlRouterProvider.otherwise("/mymessages/inbox")

        // States
        $stateProvider
          .state('inbox', {
            url: "/mymessages/inbox",
            templateUrl: "views/inbox.html"
          })
          .state('inbox1', {
            url: "/mymessages/inbox1",
            templateUrl: "views/travel.html"
          })
          .state('finance', {
            url: "/mymessages/finance",
            templateUrl: "views/finance.html"
          })
          .state('travel', {
            url: "/mymessages/travel",
            templateUrl: "views/travel.html"
          })
          .state('personal', {
            url: "/mymessages/personal",
            templateUrl: "views/personal.html"
          })
          .state('spam', {
            url: "/mymessages/spam",
            templateUrl: "views/spam.html"
          })
          .state('drafts', {
             url: "/mymessages/drafts",
            templateUrl: "views/drafts.html"
          })
          .state('sent', {
             url: "/mymessages/sent",
            templateUrl: "views/sent.html"
          })
          ;
        //$urlRouterProvider.deferIntercept();
    }
]);
app.run(['$urlRouter', '$timeout', '$state',
  function($urlRouter, $timeout, $state) {
    
    $timeout(function(){
      
      //$urlRouter.sync();
      //$urlRouter.listen();
      
      //$state.go("parent.child");
    }, 1000)
    
}]);

