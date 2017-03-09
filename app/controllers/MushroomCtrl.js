"use strict";

app.controller("MushroomCtrl", function($scope, $q, MushroomSearchFilter, MushroomList){
	//access functionality from SearchFilterFactory (the "workhorse")
	$scope.searchText = MushroomSearchFilter;

	//access functionality from MushroomFactory (the "workhorse")
	let printMushrooms = function() {
		MushroomList.getMushrooms()
			.then((shroomCollection) => {
				var collection = shroomCollection.data;
				let mushroomItems = [];
				//iterates through shrooms json to get the key: value pairs for each mushroom
				for (var i = 0; i < collection.length; i++) {
					let allMushrooms = {};
						//establishes that you're inside the mushrooms array and within each individual mushroom object within the mushrooms arrray
						allMushrooms.name = Object.keys(collection[i])[0];
						allMushrooms.edible = collection[i][allMushrooms.name].edible;
						allMushrooms.description = collection[i][allMushrooms.name].description;
						mushroomItems.push(allMushrooms);
				}
				$scope.mushrooms = mushroomItems;
			});

	};

	printMushrooms();

	let poisonFilter = function() {
		console.log("poison!!!!");
		$(".posion").show();
		$(".nopoison").show();

		$("input[name=edible]:radio").click(function () {
			if  ($("input[name=edible]:checked").val() === "Poisonous") {
				$(".posion").show();
				$(".nopoison").hide();

			} else if ($("input[name=edible]:checked").val() === "Non-poisonous") {
				$(".posion").hide();
				$(".nopoison").show();
			}
		});

		// $scope.poison = poisonFilter();
	};

	
		// $scope.poison = poisonFilter();
	// poisonFilter();

		// <input type="radio" name ="edible" class="poison" value="Poisonous">Poisonous
		// <input type="radio" name ="edible" class="nopoison" value="Non-poisonous">Non-poisonous


// <input type="radio" name="user-type" value="Store">
// <input type="radio" name="user-type" value="Brand">



// $(function () {
//     $('.showstore').hide();
//     $('.showbrand').hide();

//     $("input[name=user-type]:radio").click(function () {
//         if ($('input[name=user-type]:checked').val() == "Brand") {
//             $('.showstore').hide();
//             $('.showbrand').show();

//         } else if ($('input[name=user-type]:checked').val() == "Store") {
//             $('.showstore').show();
//             $('.showbrand').hide();

//         }
//     });
// });





}); //closes Controller

