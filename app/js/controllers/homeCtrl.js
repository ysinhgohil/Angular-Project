app.controller('homeCtrl', ['$scope', '$http', 'homeService', function ($scope, $http, homeService) {

  	$scope.searchMovie = function () {
  		homeService.generateText($scope.movieName).then(receivedText, textFailed);	
  	}

  	function receivedText(data) {
  		console.log(data);
  		$scope.actors = data.Actors;
  		$scope.awards = data.Awards;
  		$scope.director = data.Director;
  		$scope.genre = data.Genre;
  		$scope.language = data.Language;
  		$scope.metascore = data.Metascore;
  		$scope.rated = data.Rated;
  		$scope.released = data.Released;
  		$scope.runTime = data.Runtime;
  		$scope.title = data.Title;
  		$scope.writer = data.Writer;
  		$scope.imdbRating = data.imdbRating;
  		$scope.imdbVotes = data.imdbVotes;
  		$scope.country = data.Country;
  		$scope.year = data.Year;
  		$scope.poster = data.Poster;
  		$scope.plot = data.Plot;
  		$scope.response = data.Response;
  	}

  	function textFailed(err) {
  		console.log(err)
  	}

}]);