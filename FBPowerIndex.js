const data = [
  {name: 'BO', hits: 2, runs: 2, era: 2.01},
  {name: 'CK', hits: 3, runs: 1, era: 3.12},
  {name: 'JW', hits: 1, runs: 0, era: 4.55},
];

function multiSort(array, sortObject = {}) {
  const sortKeys = Object.keys(sortObject);
  
  // return array if no sort object is supplied
  if (!sortKeys.length) {
    return array;
  }
  
  // change the values of the sortObject keys to -1, 0, or 1
  for (let key in sortObject) {
    sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1
                      : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
  }
  
  const keySort = (a, b, direction) => {
    direction = direction !== null ? direction : 1;
    
    if (a === b) { // if the values are the same, do not switch positions
      return 0;
    }
    
    // if b > a, multiply by -1 to get the reverse direction
    return a > b ? direction : -1 * direction;
  };
  
  return array.sort((a, b) => {
    let sorted = 0;
    let index = 0;
    
    // loop until sorted (-1 or 1) or until the sort keys have been processed
    while (sorted === 0 && index < sortKeys.length) {
      const key = sortKeys[index];
      
      if (key) {
        const direction = sortObject[key];
        
        sorted = keySort(a[key], b[key], direction);
        index++;
      }
    }
    
    return sorted;
  });
}

// console.log(multiSort(data, {hits: 'desc', runs: 'desc', era: 'asc'}))

// This appears to be sorting/ranking by first item in element; not accurately accomplishing goal
