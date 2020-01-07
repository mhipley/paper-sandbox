// Create a raster item using the image tag with id='mona'
var raster = new Raster('sample2');

// Move the raster to the center of the view
raster.position = view.center;

// Scale the raster by 50%
raster.scale(0.5);


// Create a raster item using the image tag with id='mona'
var raster2 = new Raster('sample');

// Move the raster to the center of the view
raster2.position = view.center;

// Scale the raster by 50%
raster2.scale(0.5);


var square = new Path.Rectangle({
    position: view.center,
    size: 1000,
});


var circle = new Path.Circle(new Point(80, 50), 200);
circle.position = view.center;


var result;

result = square.subtract(circle);
result.position = view.center;

// Mask the image:
var group = new Group({
	children: [result, raster2],
	clipped: true
});


