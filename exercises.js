//Do not change any of the function names

function multiplyByTen(num) {
	return(num*10);
  //return num after multiplying it by ten
}
console.log(multiplyByTen(2))

function subtractFive(num) {
	return(num-5)
  //return num after subtracting five
}
console.log(subtractFive(10))

function areSameLength(str1, str2) {
	if(str1===str2)
		return true;

	else
		return false;
  //return true if the two strings have the same length
  //otherwise return false
}
console.log(areSameLength(2,2))

function areEqual(x, y) {
	if(x===y)
		return true;

	else
		return false;
  //return true if x and y are the same
  //otherwise return false
}
console.log(areEqual(2,2))

function lessThanNinety(num) {
	if(num<90)
		return true;

	else 
		return false;
  //return true if num is less than ninety
  //otherwise return false
}
console.log(lessThanNinety(89))

function greaterThanFifty(num) {
	if(num>50)
		return true;

	else
		return false;
  //return true if num is greater than fifty
  //otherwise return false
}
console.log(greaterThanFifty(51))

function add(x, y) {
	return(x+y);
  //add x and y together and return the value
}
console.log(add(2,4))

function subtract(x, y) {
	return(x-y);
  //subtract y from x and return the value
}
console.log(subtract(4,2))

function divide(x, y) {
	return(x/y);
  //divide x by y and return the value
}
console.log(divide(4,2))

function multiply(x, y) {
	return(x*y);
  //multiply x by y and return the value
}
console.log(multiply(2,4))

function getRemainder(x, y) {
	return(x%y);
  //return the remainder from dividing x by y
}
console.log(getRemainder(4,2))

function isEven(num) {
	if(num%2===0)
		return true;

	else
		return false;
  //return true if num is even
  //otherwise return false
}
console.log(isEven(3))

function isOdd(num) {
	if(num%2===0)
		return false;

	else
		return true;
	  //return true if num is false
  //otherwise return false
}
console.log(isOdd(3))

function square(num) {
	return(num*num);
  //square num and return the new value
}
console.log(square(4))

function cube(num) {
	return(num*num*num);
  //cube num and return the new value
}
console.log(cube(4))

function raiseToPower(num, exponent) {
	return(Math.pow(num, exponent));

  //raise num to whatever power is passed in as exponent
}
console.log(raiseToPower(4,3))

function roundNumber(num) {
	return(Math.round(num));
  //round num and return it
}
console.log(roundNumber(2.5))

function roundUp(num) {
	return(Math.ceil(num));

  //round num up and return it
}
console.log(roundUp(1.4))

function addExclamationPoint(str) {
	return(str+"!");
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
}
console.log(addExclamationPoint("OH BOB SAGET"))

function combineNames(firstName, lastName) {
	return(firstName + " " + lastName);
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
}
console.log(combineNames("Kirk", "Walkus"))

function getGreeting(name) {
	name.to
	return("Hello " + name + "!");
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
}
console.log(getGreeting("Kirk"))

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
	return (length*width);
  //return the area of the rectangle by using length and width
}
console.log(getRectangleArea(2,4))

function getTriangleArea(base, height) {
	return ((base*height)/2);
  //return the area of the triangle by using base and height
}
console.log(getTriangleArea(2,2))

function getCircleArea(radius) {
	return Math.round(3.14 * Math.pow(radius, 2));
  //return the rounded area of the circle given the radius
}
console.log(getCircleArea(2))

function getRectangularPrismVolume(length, width, height) {
	return(length*width*height);
  //return the area of the 3D rectangular prism given the length, width, and height
}
console.log(getRectangularPrismVolume(2,2,2);

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
