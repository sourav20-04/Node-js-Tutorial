const fs = require('fs');

// Asynchronous Reading

// fs.readFile('./file.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// });

// console.log("This is asynchronous reading");


// //synchronous reading
// try {
//     const data = fs.readFileSync('./file.txt');
//     console.log(data.toString());
// } catch (err) {
//     console.error(err);
// }

// console.log("synchronous reading");

// //asynchronous writing it can overwrite the data of the file

const content = 'This is some content and it will used to check the fs synchronous';

fs.writeFile('./file.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');
});

//synchronous file is using writeFilesync 