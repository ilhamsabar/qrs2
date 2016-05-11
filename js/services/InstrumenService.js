app.service('InstrumenService', function($http,$q) {

    // var baseUrl = 'http://koding.ko/qrs2_service/api/instrumen/';
    var baseUrl = 'http://localhost:8080/qrs2_service/api/instrumen/';
    var datapengawas = [];
    var datasekolah = [];
    var datasemester = [];

    return {
        
        doSaveMA1: function() {

            var deferred = $q.defer();
            var promise = deferred.promise;
        
            var dataStr = 'act=saveMA1';

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
           
        }

    }
})