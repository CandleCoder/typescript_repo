var a : Number = 1;

var b : String = "Hello";

var c : Boolean = false;

var d : String[] = ["1","2","3"]; //Array for type string as its values only (Vector in Typescript)

var e : any[] = ["1", false , 3]; //Array for type any as its value (Can have any types as the values)

enum object{first,second,third,fourth} ;

var f : object = object.first; //Accessing the enum properties

/*Usage of void in Typescript*/

function yourResult() : void{
	console.log("You have passed the examination");
}

yourResult();