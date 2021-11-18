"use strict";

function* chunkArray(arr, sizePart) {
  for (let i = 0; i < arr.length; i += sizePart) {
    const chunk = arr.slice(i, i + sizePart);
      yield chunk;
  }
}


const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());










 




 
 
 

  








 

