function dominant(arr) {
    const arrDominant = [];
    let elementoDominante = -Infinity; 
  
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] >= elementoDominante) {
        ArrDominant.unshift(arr[i]);
        elementoDominante = arr[i];
      }
    }
  
    return arrDominant;
  }
  
  // Ejemplos de uso:
  console.log(dominant([1, 21, 4, 7, 5])); // Output: [21, 7, 5]
  console.log(dominant([5, 4, 3, 2, 1])); // Output: [5, 4, 3, 2, 1]