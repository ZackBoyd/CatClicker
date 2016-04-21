
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
	//3.) Initialize views
	//4.) Iterate cat's click count when featured cat is clicked
	//5.) Access current cat for view
var controller = {
	init: function () {
		// setup catListView and featuredCatView
		catListView.init();
		featuredCatView.init();
		//Select current cat from model
		model.currentCat = model.cats[0];
	};
	getCats: function(){
		return model.cats;
	};
	getCurrentCat: function(){
		return model.currentCat;
	};
	countClick: function(){
		model.currentCat.clickCount++;
		catListView.render();
	};
};




/*====View====*/
//1.) Render catList
//2.) Render featuredCat
//3.) Store pointers to DOM objects for easy access when rendering


var catListView = {
	init: function(){
		this.catElem = $('#featuredCat');
		this.catNameElem = $('')
	}
	render:
};

var featuredCatView = {
	init:
	render:
};


controller.init();