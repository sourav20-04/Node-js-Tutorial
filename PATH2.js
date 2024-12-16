// Import the path module 
const path = require('path'); 
// Node.js program to demonstrate the 
// path.basename() method 

path1 = path.basename("/home/sourav/Desktop/Node js/PATH2.js"); 
console.log(path1) 

// // Using the extension parameter it also specify an extention to remove
// path2 = path.basename('/home/user/bash/index.txt', '.txt'); 
// console.log(path2) 


// //To get the extention of a path

// path3=path.extname('/home/user/bash/index.txt', '.txt');
// console.log(path3);

// //To make the directory one avobe 

// path4=path.join(__dirname);
// console.log(path4);


// path5=path.join(__dirname,"..");
// console.log(path5);

//To make a filename path

const directory="Public";
const filename='index.html'
const filepath=path.join(__dirname,directory,filename);
console.log("new path:",filepath);
//instead of doing this we can do it

//Resolves a sequence of paths or path segments into an absolute path.
const filePath = path.resolve('public', 'index.html');
console.log("new path:",filePath);
// Output: /your/project/directory/public/index.html

// It returns to the path.format as a format 
const filePath2 = '/public/index.html';
const parsedPath = path.parse(filePath2);
console.log(parsedPath);
// Output: { root: '/', dir: '/public', base: 'index.html', ext: '.html', name: 'index' }

