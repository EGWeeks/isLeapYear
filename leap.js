'use strict';

var Year = function(year) {
	this.year = year;
};

Year.prototype.isLeap = function() {
	var result;

	if(this.year % 4 === 0 && this.year % 100 !== 0 ||
		this.year % 4 === 0 && this.year % 100 === 0 && this.year % 400 === 0) {
		result = true;
	} else {
		result = false;
	}
	return result;
};

module.exports = Year;