app.controller('PilihSekolahCtrl', function ($rootScope, $scope, $stateParams, $state, DataService) {
    
    $scope.sekolahs = [];

    var sekolah1 = {

    	kode:"200121", 
    	nama:"SMA NEG.1 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah2 = {

    	kode:"200122", 
    	nama:"SMA NEG.2 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah3 = {

    	kode:"200123", 
    	nama:"SMA NEG 4 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah4 = {

    	kode:"200124", 
    	nama:"SMA NEG.5 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah5 = {

    	kode:"200125", 
    	nama:"SMA NEG.7 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah6 = {

    	kode:"200126", 
    	nama:"SMA NEG.9 MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah7 = {

    	kode:"200127", 
    	nama:"SMK YAPMI MAKASSAR", 
    	alamat:"MAKASSAR"

	};

	var sekolah8 = {

    	kode:"200128", 
    	nama:"SMP PRASETYA ", 
    	alamat:"MAKASSAR"

	};

	var sekolah9 = {

    	kode:"200129", 
    	nama:"SMK MUHAMMADIAH 1", 
    	alamat:"MAKASSAR"

	};

	var sekolah10 = {

    	kode:"200130", 
    	nama:"SMK MUHAMMADIAH 2", 
    	alamat:"MAKASSAR"

	};

	$scope.sekolahs.push(sekolah1);
	$scope.sekolahs.push(sekolah2);
	$scope.sekolahs.push(sekolah3);
	$scope.sekolahs.push(sekolah4);
	$scope.sekolahs.push(sekolah5);
	$scope.sekolahs.push(sekolah6);
	$scope.sekolahs.push(sekolah7);
	$scope.sekolahs.push(sekolah8);
	$scope.sekolahs.push(sekolah9);
	$scope.sekolahs.push(sekolah10);


	$scope.selectedElem = function(selection){
	    $rootScope.sekolahterpilih = selection;
	     $state.go('app.beranda');
	};

});