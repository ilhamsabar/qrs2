app.service('DataService', function($http,$q) {

    // var baseUrl = 'http://koding.ko/qrs2_service/api/data/';
    var baseUrl = 'http://localhost:8080/qrs2_service/api/data/';
    var datapengawas = [];
    var datasekolah = [];
    var datasemester = [];

    return {
        
        querydatapengawas: function() {

           var deferred = $q.defer();
           var promise = deferred.promise;

           var result;

           $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "GET",
                params: {act: 'datapengawas'}
            })
            .then(function(response) {
                datapengawas = response.data;
                deferred.resolve("success");
            }, 
            function(response) { 
                deferred.resolve("fail");
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

        getdatapengawas: function() {
            return datapengawas;
        },

        querydatasekolah: function() {

           var deferred = $q.defer();
           var promise = deferred.promise;

           var result;

           $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "GET",
                params: {act: 'datasekolah'}
            })
            .then(function(response) {
                datapengawas = response.data;
                deferred.resolve("success");
            }, 
            function(response) { 
                deferred.resolve("fail");
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

        getdatasekolah: function() {
            return datapengawas;
        },

        querydatasemester: function() {

           var deferred = $q.defer();
           var promise = deferred.promise;

           var result;

           $http({
                withCredentials: true,
                url: baseUrl+'action.php',
                method: "GET",
                params: {act: 'datasemester'}
            })
            .then(function(response) {
                datasemester = response.data;
                deferred.resolve("success");
            }, 
            function(response) { 
                deferred.resolve("fail");
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

        getdatasemester: function() {
            return datasemester;
        }

    }
})