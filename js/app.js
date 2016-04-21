
/*====Model====*/

var model = {
	currentCat = null,
	cats: [

	{
		'name':'Whiskers', 
		picture:'cat.png', 
		clickCount:0
	},
	{
		name:Sneaker,
		picture:'cat2.png', 
		clickCount:0
	},
	{
		name:'Grumpy',
		picture:'grumpy.png',
		clickCount:0
	},
	{
		name:'Reggie',
		picture:'blackcat.png',
		clickCount:0
	},
	{
		name:'Hunter',
		picture:'hunter.png',
		clickCount:
		0}
	];
};

/*====Controller====*/
	//1.) Access list of cats and send to view for rendering
	//2.) Set currently selected cat for view to display
	//3.) Initialized model and views
	//4.) Iterate cat's click count when primary cat or cat list is selected
	//5.) Access current cat for view
var controller = {
	init: function () {
		// setup catListView and featuredCatView
		catListView.init();
		featuredCatView.init();
		//Select current cat from model
		model.currentCat = model.cats[0];
	};

};




/*====View====*/
//1.) Render catList
//2.) Render featuredCat
//3.) Store pointers to DOM objects for easy access when rendering


var catListView = {
	init: 
	render:
};

var featuredCatView = {
	init:
	render:
};


controller.init();