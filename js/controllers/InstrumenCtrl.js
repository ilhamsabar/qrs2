app.controller('InstrumenCtrl', function($scope, $ionicPopup, $state,InstrumenService) {
 
 	$scope.model = {};

 	$scope.total_1 = function() {
 		$scope.model.nilai_total_1 = Number($scope.model.ma1_1)+Number($scope.model.ma1_3)+Number($scope.model.ma1_5)+Number($scope.model.ma1_7);
 	}

 	$scope.total_2 = function() {
 		$scope.model.nilai_total_2 = Number($scope.model.ma1_9)+Number($scope.model.ma1_11);
 	}

 	$scope.total_3 = function() {
 		$scope.model.nilai_total_3 = Number($scope.model.ma1_13)+Number($scope.model.ma1_15);
 	}

 	$scope.total_4 = function() {
 		$scope.model.nilai_total_4 = Number($scope.model.ma1_17)+Number($scope.model.ma1_19);
 	}
    
    $scope.total_5 = function() {
 		$scope.model.nilai_total_5 = Number($scope.model.ma1_21)+Number($scope.model.ma1_23);
 	}

 	$scope.total_6 = function() {
 		$scope.model.nilai_total_6 = Number($scope.model.ma1_27)+Number($scope.model.ma1_28)+Number($scope.model.ma1_29);
 	}

 	$scope.saveMA1 = function() {
		InstrumenService.doSaveMA1().then(function() {
    		var alertPopup = $ionicPopup.alert({
                    title: 'Data tersimpan!',
                    template: 'Data telah tersimpan!'
                });
  		});
    }

    $scope.saveMA2 = function() {
		var alertPopup = $ionicPopup.alert({
            title: 'Data tersimpan!',
            template: 'Data telah tersimpan!'
        });		
    }

    $scope.saveMA3 = function() {
		var alertPopup = $ionicPopup.alert({
            title: 'Data tersimpan!',
            template: 'Data telah tersimpan!'
        });		
    }

})