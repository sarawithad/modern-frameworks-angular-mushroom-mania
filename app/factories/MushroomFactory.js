"use strict";

app.factory("MushroomList", ($q, $http, FBCreds) => {

	let getMushrooms = (newMushroom) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/mushrooms.json`)
			.then((shroomObject) => {
				resolve(shroomObject);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getMushrooms};
});
	