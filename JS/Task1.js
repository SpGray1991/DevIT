"use strict";

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);


function nodeChildCount(el, deep = null) {
  const children = el.children;
  if (deep === 0 || !children.length) {
    return 0;
  }
  
  let count = 0;

  for (const child of el.children) {
    count += nodeChildCount(child, deep ? deep - 1 : null) + 1;
  }
  return count;
}

console.log(nodeChildCount(div, 1));







 




 
 
 

  








 

