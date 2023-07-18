const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;



var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	blueCar.setupInput(KEY_LEFT_ARROW, KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW)
	redCar.setupInput(KEY_A, KEY_W, KEY_D, KEY_S)
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keySet(keyEvent, witchCar, setTo){
	if(keyEvent.keyCode == witchCar.controlKeyLeft) {
		witchCar.keyHeld_TurnLeft = setTo;
	}
	if(keyEvent.keyCode == witchCar.controlKeyRight) {
		witchCar.keyHeld_TurnRight = setTo;
	}
	if(keyEvent.keyCode == witchCar.controlKeUp) {
		witchCar.keyHeld_Gas = setTo;
	}
	if(keyEvent.keyCode == witchCar.controlKeyDown) {
		witchCar.keyHeld_Reverse = setTo;
	}
}

function keyPressed(evt) {
	console.log("Key pressed: "+evt.keyCode);
	keySet(evt, blueCar, true)
	keySet(evt, redCar, true)

	evt.preventDefault();
}

function keyReleased(evt) {
	keySet(evt, blueCar, false)
	keySet(evt, redCar, false)
}