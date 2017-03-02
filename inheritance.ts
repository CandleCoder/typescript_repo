class person {
	
	name : string = "candlecoder";
	
	constructor(name : string) {
		this.name = name;
	}

	work(){
		console.log("The person works hard " + this.name);	
	}
}

var candlecoder = new person("candlecoder");

class awesomePerson extends person {
	
	work(){
		console.log("This person works harder than  Candle coder ");
		super.work();
	}
}

var manikant = new person("manikant");
manikant.work();