var runs = {'Aaron':469, 'Michael':478, 'AustinS':511, 'MattV':464, 'Cameron':477, 'Brenton':436, 'AustinM':441, 'Luke':450, 'MattM':455, 'Evan':443, 'Cory':470, 'Justin':458}
var doubles = {'Aaron':197, 'Michael':190, 'AustinS':178, 'MattV':174, 'Cameron':179, 'Brenton':152, 'AustinM':152, 'Luke':195, 'MattM':187, 'Evan':139, 'Cory':236, 'Justin':183}
var triples = {'Aaron':20, 'Michael':12, 'AustinS':15, 'MattV':18, 'Cameron':21, 'Brenton':21, 'AustinM':13, 'Luke':19, 'MattM':13, 'Evan':8, 'Cory':9, 'Justin':20}
var hr = {'Aaron':129, 'Michael':118, 'AustinS':132, 'MattV':120, 'Cameron':131, 'Brenton':142, 'AustinM':149, 'Luke':148, 'MattM':140, 'Evan':128, 'Cory':125, 'Justin':114}
var rbi = {'Aaron':425, 'Michael':438, 'AustinS':512, 'MattV':436, 'Cameron':431, 'Brenton':404, 'AustinM':498, 'Luke':453, 'MattM':417, 'Evan':409, 'Cory':471, 'Justin':429}
var sb = {'Aaron':42, 'Michael':62, 'AustinS':59, 'MattV':67, 'Cameron':77, 'Brenton':60, 'AustinM':46, 'Luke':33, 'MattM':82, 'Evan':32, 'Cory':35, 'Justin':47}
var avg = {'Aaron':.2624, 'Michael':.2540, 'AustinS':.2650, 'MattV':.2584, 'Cameron':.2625, 'Brenton':.2395, 'AustinM':.2493, 'Luke':.2592, 'MattM':.2589, 'Evan':.2527, 'Cory':.2653, 'Justin':.2589}

var k = {'Aaron':747, 'Michael':761, 'AustinS':699, 'MattV':661, 'Cameron':737, 'Brenton':806, 'AustinM':710, 'Luke':669, 'MattM':833, 'Evan':767, 'Cory':759, 'Justin':626}
var qs = {'Aaron':65, 'Michael':56, 'AustinS':40, 'MattV':51, 'Cameron':69, 'Brenton':58, 'AustinM':44, 'Luke':48, 'MattM':59, 'Evan':64, 'Cory':48, 'Justin':60}
var w = {'Aaron':51, 'Michael':54, 'AustinS':35, 'MattV':40, 'Cameron':50, 'Brenton':45, 'AustinM':43, 'Luke':43, 'MattM':49, 'Evan':34, 'Cory':40, 'Justin':47}
var sv = {'Aaron':0, 'Michael':45, 'AustinS':48, 'MattV':61, 'Cameron':0, 'Brenton':63, 'AustinM':28, 'Luke':33, 'MattM':50, 'Evan':45, 'Cory':43, 'Justin':17}
var era = {'Aaron':3.866, 'Michael':3.916, 'AustinS':4.358, 'MattV':3.384, 'Cameron':3.971, 'Brenton':3.981, 'AustinM':3.401, 'Luke':4.173, 'MattM':3.375, 'Evan':3.439, 'Cory':3.202, 'Justin':3.899}
var whip = {'Aaron':1.197, 'Michael':1.212, 'AustinS':1.281, 'MattV':1.144, 'Cameron':1.244, 'Brenton':1.243, 'AustinM':1.166, 'Luke':1.278, 'MattM':1.211, 'Evan':1.164, 'Cory':1.180, 'Justin':1.226}
var knine = {'Aaron':9.66, 'Michael':8.77, 'AustinS':9.46, 'MattV':9.64, 'Cameron':8.06, 'Brenton':8.94, 'AustinM':9.82, 'Luke':8.70, 'MattM':9.76, 'Evan':8.68, 'Cory':9.46, 'Justin':7.92}

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
