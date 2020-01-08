var canvas = document.getElementById('canvas');
var width = window.innerWidth;
var height = window.innerHeight;
var yDiff = height * .1;
var xDiff = width * .1;

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

var myPath;

function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = 'red';
}

function onMouseDrag(event) {
	myPath.add(event.point);

}

var result;


//SE PUSH FUNCTION
var startArr = [];
function startPush(endpoint) {
	
	startArr.splice(0, 0, endpoint);
	var newPoint = endpoint;
	while (newPoint[0] > 0 && newPoint[1] > 0) {
		var newPoint = [Math.round(newPoint[0] - xDiff), Math.round(newPoint[1] - yDiff)];	
		startArr.splice(0, 0, newPoint);
			  
	}

}


function onMouseUp(event) {

	var startX = myPath.firstSegment.point.x;
	var startY = myPath.firstSegment.point.y;
	var endX = myPath.lastSegment.point.x;
	var endY = myPath.lastSegment.point.y;
	var xDirection = endX - startX;
	var yDirection = endY - startY;
	console.log(xDirection);
	console.log(yDirection);
	console.log(endY);
	console.log(startY);
	var firstX = 100;
	var firstY = 100;
	var lastX = 0;
	var lastY = height;

	startPush([startX, startY]);

	var startPoints = [];

	for (var i = 0; i < startArr.length; i++) {
		startPoints[i] = new Point(startArr[i])
	}


	myPath.insert(new Point(firstX, firstY))
	myPath.add(new Point(lastX, lastY));
	console.log(myPath.segments);


	result = square.subtract(myPath);
	result.position = view.center;
	

	// Mask the image:
	var group = new Group({
		children: [result, raster2],
		clipped: true
	});


}



