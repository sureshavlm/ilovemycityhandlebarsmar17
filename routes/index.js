
module.exports.home = function(req, res) {
	//write logic to pull list of products from DB
	var products = ["Dell", "Sony", "Macbook Pro", "Lenovo"];

	res.render('home', 
		{ 	headline: "EJS demo", 
			title: "Express EJS Demo",
			products: products
		});
};

module.exports.city = function(req, res) {
	var cityLabel = "";
	var imageCount = [1,2,3,4];
	var city = req.params.city;

	if(city == 'newyork'){
		imageCount = [1,2,3,4,5,6];
		cityLabel = "New York";
	}
	else if(city == 'paris'){
		cityLabel = "Paris";
	} 
	else if(city == 'madrid'){
		cityLabel = "Madrid";
	} 
	else if(city == 'berlin'){
		cityLabel = "Berlin";
	} 
	else if(city == 'london'){
		cityLabel = "London";
	} 

	res.render('city', 
			{ 
				city : req.params.city, 
				title: "EJS Demo",
				cityLabel: cityLabel,
				imageCount: imageCount
			});
};