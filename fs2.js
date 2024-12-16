const fs=require('fs');


//Asynchronous appending it add content each time

const content = 'This is some new appending  content';

fs.appendFile('./file.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }


    
    fs.readFile('./file.txt','utf-8',(err,data)=>{
        console.log(data);
        
    })
    console.log('Content has been appended');
});

//synchronous appending it add content each time using appendFilesync
