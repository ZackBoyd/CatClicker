
//====Model====//

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

window.onload = function function_name() {
	for (var i = 0; i < cats.length; i++) {
		var catName = cats[i].name;
		var catPic = cats[i].picture;
		var catElem = "#" + catName;
		var catHTML = "<li>" + catName + "</li>" + 
			"<img src='img/" + catPic + "'" + "class=" + "'img-thumbnail'" + "id=" + catName + "></img>";
		$('#catList').append(catHTML);
		$(catName).click(function(e){
			$('#featuredCatPic').attr("src", catPic);
		})
	};	
};

