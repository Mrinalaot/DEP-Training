// Let's make a Cat constructor!
// http://www.codewars.com/kata/using-closures-to-share-class-state

function Cat(name, weight) {
    if (name == undefined || weight == undefined) {
        throw new Error("name and weight not defined");
    }
    if (Cat.counter) {
        Cat.counter++;
    } else {
        Cat.counter = 1;
    }
    if (Cat.Sum) {
        Cat.Sum += weight;
    } else {
        Cat.Sum = weight;
    }
    Object.defineProperty(this, "name", {
        get: () => name,
        set: (newName) => name = newName
    });
    Object.defineProperty(this, "weight", {
        get: () => weight,
        set: (newWeight) => {
            Cat.Sum -= weight;
            weight = newWeight;
            Cat.Sum += weight;
        }
    });
}

Object.defineProperty(Cat, "averageWeight", {
    value: () => Cat.Sum / Cat.counter
});