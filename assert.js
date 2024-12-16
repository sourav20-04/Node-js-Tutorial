// // // Requiring the module 


// const assert = require('assert').strict; 

// var a = "GeeksforGeeks"; 
// var b = "Geeks4Geeks"; 

// // Function call 
// try { 
// 	assert.strictEqual(a, b); 
// } catch(error) { 
// 	console.log("Error: ", error) 
// }


// // Requiring the module
// const assert = require('assert').strict;

// // Function call
// try {
// 	assert(0)
// 	console.log("No Error Occurred")
// } catch(error) {
// 	console.log("Error:", error)
// }





// // Requiring the module
// const assert = require('assert').strict;
	
// // Function call
// try {
// 	assert.deepStrictEqual({ a: 1 }, { a: '1' });
// } catch(error) {
// 	console.log("The Error: ", error)
// }


// 

const assert=require('assert').strict;
// try {
// 	assert.deepEqual({a:1},{a:2});
// } catch (error) {
// 	console.log("The Error:",error);
	
// }

try {
	assert.doesNotMatch('I will fail',/"The"/)
	console.log("No error ocured");
	
} catch (error) {
	console.log(error);
	
}


