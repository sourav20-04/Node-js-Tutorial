	// Node.js program to demonstrate the 
	// Buffer.allocUnsafeSlow() Method 
		
	// Creating a buffer 
	const buffer = Buffer.allocUnsafe(10); 
		
	// Display the buffer containing random values 
	console.log(buffer); 






// //  Node.js program to demonstrate the
// Buffer.copy() Method


// Creating a buffer
let buffer2 = Buffer.from('for');

let buffer1 = Buffer.from('GeeksandGeeks');

buffer2.copy(buffer1, 5, 0);

console.log(buffer1.toString());
console.log(buffer2.toString());







// Node.js program to demonstrate the
// Buffer.copy() Method

// let buffer2 = Buffer.allocUnsafe(5);

// let buffer1 = Buffer.from('Geeks');

// for (let i = 0; i < 5; i++) {

// 	// Adds: 'a b c d e' as 97 98 99 100 101
// 	// are their respective ASCII values
// 	buffer2[i] = i + 97;
// }

// buffer2.copy(buffer1, 2);

// // Prints 'Geabc' as the input buffer1
// // carries 'Geeks' and we provided the
// // targetStart index as 2
// // so elements will replace the values in
// // buffer1 starting from index 2

// console.log(buffer1.toString());

