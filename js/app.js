

/*====Model====*/

var model = {
	currentCat: null,
	cats: [

	{
		'name':'Whiskers', 
		imgSrc:'cat.png', 
		clickCount:0
	},
	{
		name:'Sneaker',
		imgSrc:'cat2.png', 
		clickCount:0
	},
	{
		name:'Grumpy',
		imgSrc:'grumpy.png',
		clickCount:0
	},
	{
		name:'Reggie',
		imgSrc:'blackcat.png',
		clickCount:0
	},
	{
		name:'Hunter',
		imgSrc:'hunter.png',
		clickCount:0
	}
	]
};

/*====Controller====*/
	//1.) Access list of cats and send to view for rendering
	//2.) Set currently selected cat for view to display
	//3.) Initialize views
	//4.) Iterate cat's click count when featured cat is clicked
	//5.) Access current cat for view
	//Admin Features
	//1.) Function to update cat name/img/clickCount when save button is clicked

var controller = {
	init: function () {
		//Select current cat from model
		model.currentCat = model.cats[0];
		// setup catListView and featuredCatView
		catListView.init();
		featuredCatView.init();
		adminView.init();
	},
	getCats: function(){
		return model.cats;
	},
	setCurrentCat: function(cat){
		model.currentCat = cat;
	},
	getCurrentCat: function(){
		return model.currentCat;
	},
	countClick: function(){
		model.currentCat.clickCount++;
		featuredCatView.render();
	}
};




/*====View====*/
//Premium Features
//1.) Render catList
//2.) Render featuredCat
//3.) Store pointers to DOM objects for easy access when rendering
//Premium Pro Features
//1.) Admin view
//2.) Function to show admin view with currentCat name/img/clickCount inserted
//3.) Function to hide admin view


var featuredCatView = {

	init: function(){
		//Pointers for all the DOM elements that I'll put the featured cat data into
		this.catElem = document.getElementById('featuredCat');
		this.catNameElem = document.getElementById('featuredCatName');
		this.catCountElem = document.getElementById('featuredCatCount');
		this.catImageElem = document.getElementById('featuredCatImage');
		//Add listener for click to increment click counter
		this.catImageElem.addEventListener('click', function(){
			controller.countClick();
		});

		this.render();

	},

	render: function(){
		var currentCat = controller.getCurrentCat();
        this.catCountElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = 'img/' + currentCat.imgSrc;
	}
};

var catListView = {

	init: function(){
		//Set pointer for catList
		this.catListElem = document.getElementById('catList');
		//Render cat list
		this.render();
	},

	render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the controller
        var cats = controller.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the featuredCatView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    featuredCatView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var adminView = {

	init: function(){
		//Define DOM pointers for the admin button and the form
		var adminBtn = document.getElementById('adminButton');
		//add click listener to showAdmin button on initialization so that the function can run when the admin button is clicked
		adminBtn.addEventListener('click', function(){
			//Get current cat and send to showAdmin
			adminView.showAdmin();
		})
	},
	
	showAdmin: function(){
		var cancelBtn = document.getElementById('adminCancelButton');
		var saveBtn = document.getElementById('adminSaveButton');
		var currentCat = controller.getCurrentCat();
		//Show admin form and load currentCat name/imgSrc/clickCount
		//Define form DOM pointer and cat values for inseration into form on show
		$('#adminForm').show();
		this.formCatName = document.getElementById('formCatName');
		this.formImgSrc = document.getElementById('formImgSrc');
		this.formClickCount = document.getElementById('formClickCount');
		//Load cat values into form
		this.formCatName.textContent = currentCat.name;
		this.formImgSrc.textContent = currentCat.imgSrc;
		this.formClickCount.textContent = currentCat.clickCount;
		//Add listeners for cancel and save buttons
		cancelBtn.addEventListener('click', function(){
			adminView.hideAdmin();
		})
		saveBtn.addEventListener('click', function(){
			//Update currentCat with input from form

			//Close admin form
			hideAdmin();
		})
	},
	hideAdmin: function(){
		$('#adminForm').hide();
	}
};

controller.init();