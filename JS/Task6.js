"use strict";

const arr = [
  [5, 3, 6], 
  [7, 11, 2],
  [15, 9, 4]
 ];
 
 const minValue = Math.min(...arr.flat());
 
 const result = arr.map(subArray => 
  subArray.map(valueToMultiple => 
    (valueToMultiple % 2) ? (valueToMultiple * minValue) : valueToMultiple));
 
 console.log(result);








 




 
 
 

  








 

