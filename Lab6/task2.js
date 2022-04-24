function Arrayfind(array, target) {
    const Pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          Pairs.push([array[i], array[j]]);
        }
      }
    }
    console.log("------------------------------");
    console.log("Given Array  : ", array);
    console.log("Given Target : ", target);
    console.log("Result Pairs : ", Pairs);
    console.log("------------------------------");
  }
  
  
  Arrayfind([1, 2, 3, 1], 4);
  Arrayfind([1, 2, 3, 1, 3], 3);
