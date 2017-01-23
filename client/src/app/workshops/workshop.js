"use strict";
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var Workshop = (function () {
    function Workshop() {
        this.address = new Address();
    }
    return Workshop;
}());
exports.Workshop = Workshop;
//# sourceMappingURL=workshop.js.map