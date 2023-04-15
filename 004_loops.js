
const list = [33,55,2, 433, 1459 , 6];

// console.log("length" , list.length);

let total = 0;

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        // console.log("element" , element);  
       total = total  + element;   
    }

console.log("total",total);   