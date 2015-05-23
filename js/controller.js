angular.module('github-api')
.controller('getHubController', function($scope, gethubService){

	$scope.name = 'Search GitHub';


	$scope.getUserData = function() {
		gethubService.getUser($scope.searchText).then(function(res) {
			console.log(res);
			$scope.user = res.data;
		})

	}


});

