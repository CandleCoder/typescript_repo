var a = 1;
var b = "Hello";
var c = false;
var d = ["1", "2", "3"]; //Array for type string as its values only (Vector in Typescript)
var e = ["1", false, 3]; //Array for type any as its value (Can have any types as the values)
var object;
(function (object) {
    object[object["first"] = 0] = "first";
    object[object["second"] = 1] = "second";
    object[object["third"] = 2] = "third";
    object[object["fourth"] = 3] = "fourth";
})(object || (object = {}));
;
var f = object.first; //Accessing the enum properties
/*Usage of void in Typescript*/
function yourResult() {
    console.log("You have passed the examination");
}
yourResult();
