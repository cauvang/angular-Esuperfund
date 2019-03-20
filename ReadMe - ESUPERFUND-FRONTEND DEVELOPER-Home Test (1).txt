*******************************************************************************
***
***   ESUPERFUND Frontend Developer Homework Test
***
*******************************************************************************

Your task is to create a Single Page Application (SPA) base on the business scenario 
below.

"We surveyed 500 people and asked them what their gender, favourite fruit and color are. "


Page Requirements:

Based on the survey results, display the survey data in a table;
Have filter options for gender, fruit and color;
Display a chart to show the co-relationship between gender and color;
Display a chart to show the co-relationship between gender and fruit.
Chart will update as the filter changes.
The SPA MUST be responsive on Desktop, Tablet and Mobile;


Technical Requirements:

Use VueJS 2 or Angular 5+ as the base framework;
Use NPM;
Use SCSS for styling;
DO NOT use <table> tag, instead, Use flex;


Other Information:

You will have 48 hours to complete this Test and return your work to our office.
Once you download the test script, we will start the count down. 
Please email your work in a zip file to recruitment@esuperfund.com.au.
If you do not want to participate in this first round Homework Test, 
you can simply disregard this test and not return your work.
If you need more time, please email
to recruitment@esuperfund.com.au, stating your name, extra hours you need and the reason.


You can generate the survey data from https://www.json-generator.com/
Here is the script:
[
	'{{repeat(500)}}', {
		_id : '{{objectId()}}',
		index : '{{index()}}',
		age : '{{integer(18, 60)}}',
		name : '{{firstName()}}',
		gender : '{{gender()}}',
		favoriteFruit : function () {
			var fruits = [
			"apple", "banana", "cherry", "dragon fruit", 
			"fig", "grape", "honeydew melon", "jackfruit", 
			"kiwi", "lychee", "mango", "orange"];
			
			return fruits[Math.floor(Math.random() * fruits.length)];
		},
		favoriteColor : function (tags) {
			var colors = [
			"aqua", "aquamarine", "azure", "beige", "bisque", "black", 
			"blue", "brown", "burlywood", "chartreuse", "chocolate", 
			"coral", "cornsilk", "crimson", "cyan", "firebrick", 
			"fuchsia", "gainsboro", "gold", "goldenrod", "gray", 
			"green", "honeydew", "indigo", "ivory", "khaki", "lavender", 
			"lime", "linen", "magenta", "maroon", "moccasin", "olive", 
			"orange", "orchid", "peru", "pink", "plum", "purple", "red", 
			"salmon", "seashell", "sienna", "silver", "snow", "tan", 
			"teal", "thistle", "tomato", "turquoise", "violet", "wheat", 
			"white", "yellow"];
			
			return colors[Math.floor(Math.random() * colors.length)];
		}
	}
]

