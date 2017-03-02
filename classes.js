var miscellaneous = (function () {
    function miscellaneous() {
        this.name = "Candlecoder";
        this.conversation = miscellaneous.message;
    }
    miscellaneous.prototype.hello = function (name) {
        console.log("Hii " + name);
    };
    return miscellaneous;
}());
miscellaneous.message = "Autumn has arrived!";
var instance = new miscellaneous();
instance.conversation = "Yes! You are right!";
instance.hello("Candle coder");
