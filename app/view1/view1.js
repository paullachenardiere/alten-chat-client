// 'use strict';

var chatView1 = angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'main'
        });
    }]);

chatView1.controller('View1Ctrl', ['$rootScope', '$scope', '$q', 'ChatService', function ($rootScope, $scope, $q, ChatService) {

    var self = this;

    self.messages = [];

    var getall = function () {
        var promise = ChatService.getAllChatMessages();

        $q.when(promise).then(function (res) {
            self.messages = res.data;
            console.log('Controller data', self.messages);
        }, function (err) {
            console.log('Controller error', err);
        })
    };
    getall();


    return self;
}]);




