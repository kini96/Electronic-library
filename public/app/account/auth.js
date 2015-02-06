app.factory('auth', function($http, $q, identity) {
	return {
		login: function(user) {
			var deferred = $q.defer();

			$http.post('/login', user).success(function(response) {
				if (response.success) {
					identity.currentUser = response.user;
					deferred.resolve(true);
					console.log(response.user);
					
				}
				else {
					deferred.resolve(false);
					
				}
			});

			return deferred.promise;
		}
	}
})