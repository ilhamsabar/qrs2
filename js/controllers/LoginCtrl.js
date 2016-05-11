app.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $window) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.login($scope.data.username, $scope.data.password).success(function(data) {
            
            $window.location.reload(true);
            $state.go('pilihsekolah');

        }).fail (function(data) {
            var title;
            if (data=='fail') {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login salah!',
                    template: 'Cek username/password anda!'
                });
            } else if (data=='bad') {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login gagal!',
                    template: 'Terjadi kesalahan pada sistem'
                });
            }
           
        });
    }

})