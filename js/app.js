
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


var featuredCatView = {

	init: function(){
		//Pointers for all the DOM elements that I'll put the featured cat data into
		this.catElem = $('#featuredCat');
		this.catNameElem = $('#featuredCatName');
		this.catCountElem = $('#featuredCatCount');
		this.catImageElem = $('#featuredCatImage');
		//Add listener for click to increment click counter
		this.catImageElem.addEventListener(click(function(){
			controller.countClick();
		});

		this.render();

		},

	render: function(){
		var currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {

	init: function(){
		//Set pointer for catList
		this.catListElem = $('#catList');
		//Render cat list
		this.render();
	}
	render:
};


controller.init();