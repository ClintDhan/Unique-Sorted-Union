const uniteUnique = (...arr) => {
  let sorted = [];
  for (const arg of arr) {
    for(let i = 0; i < arg.length; i++) {
      if(sorted.includes(arg[i]) === false) {
        sorted.push(arg[i]);
      }
    }
  }

  return sorted;
}


console.log(uniteUnique([1,2], [3,4], [5,2,1]))