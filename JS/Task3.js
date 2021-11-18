"use strict";

const f1 = (cb) => {cb(1)};
const f2 = (a, cb) => {cb(a)};
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)};

let  inputArrayToRun = [[f1, []], [f2, [2]], [f3, [3, 4]]];

function bulkRun (inputArrayToRun){
  const promises = [];

    for(const [functionToExecute, parameters] of inputArrayToRun) {
        if( typeof functionToExecute === 'function') {
           promises.push(new Promise(resolve => {
             functionToExecute(...parameters, resolve);
           }));
        }
    }

    return Promise.all(promises);
}

bulkRun(inputArrayToRun).then(console.log);








 




 
 
 

  








 

