stats = { 
     "HITS":[20, 19, 1.11], 
     "RUNS":[19, 21, 1.01], 
     "ERA":[18, 17, 2.23],
     "BAVG":[18, 17, 2.23]
};

var sorto = {
  HITS:"desc",RUNS:"desc", BAVG:"desc", ERA:"asc",
};

var sorted_stats = {[]}

Array.prototype.keySort = function(keys) {

keys = keys || {};

// via
// https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
var obLen = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};

// avoiding using Object.keys because I guess did it have IE8 issues?
// else var obIx = function(obj, ix){ return Object.keys(obj)[ix]; } or
// whatever
var obIx = function(obj, ix) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (size == ix)
                return key;
            size++;
        }
    }
    return false;
};

var keySort = function(a, b, d) {
    d = d !== null ? d : 1;
    // a = a.toLowerCase(); 
    // b = b.toLowerCase();
    if (a == b)
        return 0;
    return a > b ? 1 * d : -1 * d;
};

var KL = obLen(keys);

if (!KL)
    return this.sort(keySort);

for ( var k in keys) {
    // asc unless desc or skip
    keys[k] = 
            keys[k] == 'desc' || keys[k] == -1  ? -1 
          : (keys[k] == 'skip' || keys[k] === 0 ? 0 
          : 1);
}

this.sort(function(a, b) {
    var sorted = 0, ix = 0;

    while (sorted === 0 && ix < KL) {
        var k = obIx(keys, ix);
        if (k) {
            var dir = keys[k];
            sorted = keySort(a[k], b[k], dir);
            ix++;
        }
    }
    return sorted;
});
return this;
};

// obja.keySort(sorto);

// This appears to be sorting/ranking by first item in element only; not accurately accomplishing goal; perhaps need to assign numeric value from here for first category, then rinse/repeat for each additional cat.? Seems way too redundant.
