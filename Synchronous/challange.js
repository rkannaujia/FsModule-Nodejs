//Challange time
// 1: Create a folder named it Rahul
// 2: create a file in it named "bio.txt"  and data into it
//3: add more data into the file at the end of existing data
//4: read the data without getting the buffer data at first
//5: rename the file name to "mybio.txt" 
//6: now delete both the file and the folder
const fs = require('fs');
//1:
// fs.mkdirSync("Rahul");
//2:
// fs.writeFileSync('bio.txt', "this is first line");
//3:
//fs.appendFileSync('bio.txt', " This is additional content");
//4:
//const data = fs.readFileSync("bio.txt", "utf-8");
//console.log(data);

//5:
//fs.renameSync('bio.txt','mybio.txt');

//6:
//
//fs.unlinkSync('mybio.txt');
fs.rmdirSync('Rahul');





