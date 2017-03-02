var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person = (function () {
    function person(name) {
        this.name = "candlecoder";
        this.name = name;
    }
    person.prototype.work = function () {
        console.log("The person works hard " + this.name);
    };
    return person;
}());
var candlecoder = new person("candlecoder");
var awesomePerson = (function (_super) {
    __extends(awesomePerson, _super);
    function awesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    awesomePerson.prototype.work = function () {
        console.log("This person works harder than  Candle coder ");
        _super.prototype.work.call(this);
    };
    return awesomePerson;
}(person));
var manikant = new person("manikant");
manikant.work();
