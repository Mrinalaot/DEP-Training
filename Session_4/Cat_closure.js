// Let's make a Cat constructor!
// http://www.codewars.com/kata/using-closures-to-share-class-state

var avgWeight = 0;
var counter = 0;

function Cat(name, weight) {
    counter++;
    if (counter == 1) {
        avgWeight = weight;
    } else {
        avgWeight = (avgWeight + weight) / 2;
    }

    if (name == undefined || weight == undefined) {
        throw new Error("Not Defined");
    }
    this.name = name;
    this.weight = weight;
}


Cat.averageWeight = function() {
    return avgWeight;
};