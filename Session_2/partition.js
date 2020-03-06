//Partition On
//http://www.codewars.com/kata/partition-on


function partitionOn(pred, items) {
    var evens = items.filter(pred);

    var odds = items.filter(
        function(e) { return !pred(e); }
    );

    for (var i = 0; i < odds.length; i++) {
        items[i] = odds[i];
    }

    for (var j = 0; j < evens.length; j++) {
        items[i] = evens[j];
        i++;
    }

    return odds.length;
}