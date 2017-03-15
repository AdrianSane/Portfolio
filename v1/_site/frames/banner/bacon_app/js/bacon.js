function DBController($scope){
	$scope.userName;
	$scope.nameArray = ["Dont forget the Bacon!"];
		$scope.addName = function(){
			$scope.nameArray.push($scope.userName);
			$scope.userName = "";
		};

	$scope.deleteName = function(deletedName){
		var idx = $scope.nameArray.indexOf(deletedName);
		$scope.nameArray.splice(idx,1);
	};
};
