class miscellaneous{
	name : string = "Candlecoder";
	static message: string = "Autumn has arrived!";
	conversation : string;

	constructor (){
		this.conversation = 	miscellaneous.message;
	}

	hello(name : string){
		console.log("Hii " +name);
	}
}

var instance = new miscellaneous();
instance.conversation = "Yes! You are right!";
instance.hello("Candle coder");