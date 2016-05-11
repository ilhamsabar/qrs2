// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material','ngAnimate']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('pilihsekolah', {
        url: '/pilihsekolah',
        templateUrl: 'templates/pilihsekolah.html',
        controller: 'PilihSekolahCtrl'
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.instrumen', {
        url: '/instrumen',
        controller: 'AppCtrl'
    })

    .state('app.beranda', {
        url: '/beranda',
        views: {
            'menuContent': {
                templateUrl: 'templates/beranda.html',
                controller: 'BerandaCtrl'
            }
        }
    })

    .state('app.pengawas', {
        url: '/pengawas',
        views: {
            'menuContent': {
                templateUrl: 'templates/pengawas.html',
                controller: 'PengawasCtrl'
            }
        }
    })

    .state('app.sekolah', {
        url: '/sekolah',
        views: {
            'menuContent': {
                templateUrl: 'templates/sekolah.html',
                controller: 'SekolahCtrl'
            }
        }
    })

    .state('app.ma1', {
        url: '/ma1',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma1.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma2', {
        url: '/ma2',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma2.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma3', {
        url: '/ma3',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma3.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma4', {
        url: '/ma4',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma4.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma5', {
        url: '/ma5',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma5.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma6', {
        url: '/ma6',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma6.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma7', {
        url: '/ma7',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma7.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma8', {
        url: '/ma8',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma8.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma9', {
        url: '/ma9',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma9.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma10', {
        url: '/ma10',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma10.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma11', {
        url: '/ma11',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma11.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma12', {
        url: '/ma12',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma12.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma13', {
        url: '/ma13',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma13.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma14', {
        url: '/ma14',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma14.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma15', {
        url: '/ma15',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma15.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma16', {
        url: '/ma16',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma16.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma17', {
        url: '/ma17',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma17.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma18', {
        url: '/ma18',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma18.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    .state('app.ma19', {
        url: '/ma19',
        views: {
            'menuContent': {
                templateUrl: 'templates/instrumen/ma19.html',
                controller: 'InstrumenCtrl'
            }
        }
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});


app.run(function ($ionicPlatform,$rootScope,$location,$ionicPopup,LoginService) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on("$stateChangeStart", function (event, next, current) {

        // $rootScope.authenticated = false;
        // LoginService.getSession().success(function(data) {
        //     $rootScope.authenticated = true;
        //     $rootScope.uid = "OK";
        // }).fail (function(data) {
        //     if (data=='notlogged') {
        //         if (next.name!='login') {
        //             $location.path("/login");
        //         }
        //     } else if (data=='bad') {
        //         var alertPopup = $ionicPopup.alert({
        //             title: 'Login gagal!',
        //             template: 'Terjadi kesalahan pada sistem'
        //         });
        //     }
        // });  
    
        
    });

});


