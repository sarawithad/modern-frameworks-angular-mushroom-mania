"use strict";

var app = angular.module("ManiaApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",  {
		templateUrl: "partials/shroom-details.html", //
		controller: "MushroomCtrl"
	}).
	otherwise("/"); //not sure if I need this
});



//run when the app loads
app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});
