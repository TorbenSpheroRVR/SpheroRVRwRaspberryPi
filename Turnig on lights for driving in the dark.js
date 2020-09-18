async function startProgram() {
	setMainLed({r: 0,g: 0, b: 255});
	setBackLed({r: 255, g: 0, b: 0});
	if (getLuminosity(200)){
		speed(25);
	}
	if (getLuminosity(0)){
		setLeftHeadlightLed(r: 255, g: 255, b: 255);
		setRightHeadlightLed(r: 255, g: 255, b: 255;
		setBackLed(r: 255, g: 255, b: 255);
	}
}
