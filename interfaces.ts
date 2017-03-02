interface UserDetails{
	name : 	String;
	emailId? : String; //? Stands for Optional parameter of Interface, else ts will through an Error
}

function printName(userDetails : UserDetails){
	console.log(userDetails.name);
}

printName({name : "Manikant"});
printName({name : "Candlecoder"});