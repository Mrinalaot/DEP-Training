// Extract Nested Object Reference
// http://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
    var arr = string.split(".");

    var prop = "";
    for (var i = 0; i < arr.length; i++) {
        if (i === 0)
            prop = this[arr[0]];
        else if (prop == undefined)
            return undefined;
        else
            prop = prop[arr[i]];
    }

    return prop;
}