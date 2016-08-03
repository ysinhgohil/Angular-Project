app.factory('homeService', ['$http','$q', function($http,$q){
	var homeService={};
	
	homeService.generateText = function (name) {
		var deferred = $q.defer();

		$http.get('http://www.omdbapi.com/?t='+name)
		.success(function (data){
			deferred.resolve(data);
		}).error(function (error){
			deferred.reject(error);
		});

		return deferred.promise;
	}

	return homeService;
}]);