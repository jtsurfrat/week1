var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hamburger = (function () {
    function Hamburger() {
        this.name = "hamburger";
        this.price = 2;
    }
    Hamburger.prototype.getPrice = function () {
        return this.price;
    };
    return Hamburger;
}());
var Cheeseburger = (function (_super) {
    __extends(Cheeseburger, _super);
    function Cheeseburger() {
        _super.call(this);
        this.name = "Cheeseburger";
        this.cheese = 1;
    }
    Cheeseburger.prototype.getPrice = function () {
        return _super.prototype.getPrice.call(this) + this.cheese;
    };
    return Cheeseburger;
}(Hamburger));
