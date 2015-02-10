app.factory('identity', function($window) {
	console.log($window.bootstrappedUserObject);
	return {
		currentUser: $window.bootstrappedUserObject,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
	}
});