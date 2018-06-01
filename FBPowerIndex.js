var obja = [
  {USER:"BO", HITS:45, RUNS:32, BAVG:.308, ERA:1.08},
  {USER:"CK", HITS:46, RUNS:35, BAVG:.278, ERA:2.29},
  {USER:"JW", HITS:42, RUNS:30, BAVG:.282, ERA:1.78},
  {USER:"AW", HITS:48, RUNS:31, BAVG:.314, ERA:0.98},
  {USER:"EP", HITS:52, RUNS:33, BAVG:.288, ERA:3.55},
  {USER:"LL", HITS:44, RUNS:30, BAVG:.254, ERA:4.66},
  {USER:"CN", HITS:41, RUNS:34, BAVG:.267, ERA:3.92},
  {USER:"MM", HITS:39, RUNS:32, BAVG:.282, ERA:3.86},
  {USER:"MV", HITS:46, RUNS:30, BAVG:.246, ERA:2.12},
  {USER:"AM", HITS:38, RUNS:29, BAVG:.291, ERA:1.47}
];

var sorto = {
  HITS:"desc",RUNS:"desc", BAVG:"desc", ERA:"asc",
};

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
