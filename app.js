var mongo = require("mongodb").MongoClient; //using mongo
var prompt = require("prompt-sync")(); //requiring prompt
var url = "mongodb://localhost:27017/restaurant_db";


/*

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  var searchRestaurant = prompt('Search A Restaurant pleez:');
  //whatever the user enters is stored in the serchRestaurant Var...
  //for lop to search the array 

  collection.find({name: searchRestaurant}).forEach(function(err,doc){
  	console.log(searchRestaurant);
  	console.log(doc);
  	
  });
});

// make a new restaurant solved
mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');
	var newName = prompt('design your own restuarant, what will you call it?');

	var newRest = (newName);

	collection.insert({name:newRest});
});

*/

/*
mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');

	var updateRest = prompt('which restuarant do you want to update');
	
	var newName = prompt('tell us the name of your restuarant:?');
	var newSreet = prompt('tell us the street of your restuarant:?');
	var newZip = prompt('tell us the zip of your restuarant:?');
	var newYelp = prompt('tell us the yelp of your restuarant:?');

	
	
	var newRestObject = {
		name: newName,
		street: newSreet,
		zip: newZip,
		yelp: newYelp
	};
	
	
	collection.update(
  			{name: updateRest},
  				{ $set: { name:newName ,
  					street:newSreet ,
  					zip: newZip,
  					yelp: newYelp
  				}
  		});

	});
*/

mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');

	var deleteRest = prompt('which restuarant do you want to delete');

	collection.remove({ name: deleteRest });
	console.log(deleteRest);

});




/*
mongo.connect(url, function(err,db){
	var collection = db.collection('restaurants');

	var updateRest = prompt('which restuarant do you want to update');
	
	var newName = prompt('tell us the name of your restuarant:?');
	var newSreet = prompt('tell us the street of your restuarant:?');
	var newZip = prompt('tell us the zip of your restuarant:?');
	var newYelp = prompt('tell us the yelp of your restuarant:?');

	collection = db.collection();
	
	var newRestObject = {
		name: newName,
		street: newSreet,
		zip: newZip,
		yelp: newYelp
	};
	
	db.restaurants.update(
  {name: restName},
  { $set: { newRestObject }});

});
*/

//create a prompt for users to find their own restuarant





	
	//var newRest = collection.insert({name:"mongolian BBQ"});

	
//homework is 3 more prompt functions, but only one is commented out, 
