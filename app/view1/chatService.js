chatView1.factory('ChatService', function ($q, $http) {

    var self = this;

    var baseUrl = 'http://localhost:8080/altenchat/';


    self.getAllChatMessages = function () {
        console.log('getAllChatMessages');
        var deferred = $q.defer();

        var config = {
            method: 'GET',
            url: baseUrl,
            headers: 'Accept: application/json'
        };

        var promise = $http(config);

        promise.then( function(res) {
            console.log('Result ' ,res);
            deferred.resolve(res);
        }, function (err) {
            console.log('Error ' ,err);
            deferred.reject(err);
        });

        return deferred.promise;
    };

    return self;

});
