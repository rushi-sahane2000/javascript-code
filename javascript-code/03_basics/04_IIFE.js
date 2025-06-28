// Immediately Invoked Function Expressions (IIFE)
 

// IIFE used is mostly used as avoid global inturupt and exicute function immenditly 
// main use of this function  inturupt means(global variable,function,object etc)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');




