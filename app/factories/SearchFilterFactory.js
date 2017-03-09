"use strict";

// When the user types any text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.


app.factory("MushroomSearchFilter", function(){
	return {
		search: ""
	};
});
 