app.service('LoginService', function($http,$q) {

    // var baseUrl = 'http://koding.ko/qrs2_service/api/login/';
    var baseUrl = 'http://localhost:8080/qrs2_service/api/login/';

    return {
        login: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var dataStr = 'act=login&'+'name='+name+'&'+'pw='+pw;

            $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "POST",
                data: dataStr,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            })
            .then(function(response) {
                if(response.data=="okl") {
                    deferred.resolve('success'); 
                } else {
                    deferred.reject('fail');
                }
            }, 
            function(response) { 
                deferred.reject('bad');
            });

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.fail = function(fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;
        }, 

        getSession: function() {

            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "GET",
                params: {act: 'session'}
            })
            .then(function(response) {
                if(response.data=="oks") {
                    deferred.resolve('logged'); 
                } else {
                    deferred.reject('notlogged');
                }
            }, 
            function(response) { 
                deferred.reject('bad');
            });


            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.fail = function(fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;

        },

        logout: function() {

            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "GET",
                params: {act: 'logout'}
            })
            .then(function(response) {
                 deferred.resolve('loggedout'); 
            }, 
            function(response) { 
                deferred.reject('bad');
            });

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.fail = function(fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;



        }

    }
})