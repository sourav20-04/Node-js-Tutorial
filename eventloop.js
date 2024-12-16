// console.log("This is the first statement");

// setTimeout(function(){
// 	console.log("This is the second statement");
// }, 1000);

// console.log("This is the third statement");

console.log('Start');

setImmediate(() => {
	console.log('Immediate callback');
});

console.log('End');


// const { idle } = require('idle-gc');

// idle.ignore();




// const fs=require('fs');
// console.log(fs);



// const fs = require('fs');
// const readStream = fs.createReadStream('./file.txt');



// console.log('Start');

// readStream.on('data', (chunk) => {
// 	console.log(chunk.toString());
// });

// console.log('End');


const net = require('net');
const server = net.createServer((socket) => {
	socket.on('close', () => {
		console.log('Socket closed');
	});
});

server.listen(8000);