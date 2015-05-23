angular.module('github-api')
.service('gethubService', function($http, $q){

	var id = "myCLientID";
  	var sec = "mySecretKeyThing";
  	var param = "?client_id=" + id + "&client_secret=" + sec;

  	this.getUser = function(username) {
  		var url = 'https://api.github.com/users/' + username;
  		return $http.get(url);

  	}


});




// Client ID
// 0a774f288c289f2a417f
// Client Secret
// 3bbc1388f7874a9b3a6d33ed1ebad2eed1f21625