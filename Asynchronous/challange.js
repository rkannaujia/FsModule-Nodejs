//Challange time
// 1: Create a folder named it Rahul
// 2: create a file in it named "bio.txt"  and data into it
//3: add more data into the file at the end of existing data
//4: read the data without getting the buffer data at first
//5: rename the file name to "mybio.txt" 
//6: now delete both the file and the folder
const fs = require('fs');

//1: Create a folder named it Rahul
/*
fs.mkdir("Rahul", (err) => {
    console.log("Folder created");
})
*/

//2: create a file in it named "bio.txt"  and data into it
/*
fs.writeFile('./Rahul/bio.txt', 'I am Rahul.', (err) => {
    console.log("File created");
});
*/

//3: add more data into the file at the end of existing data
/*
fs.appendFile('./Rahul/bio.txt',"I want to be a MERN Developer", (err) =>
{
    console.log("content added");
})
*/

//4:  read the data without getting the buffer data at first
/*
fs.readFile('./Rahul/bio.txt', 'utf-8', (err, data) => {
    console.log(data);
});
*/

//5: rename the file name to "mybio.txt"
/*
fs.rename('./Rahul/bio.txt','./Rahul/mybio.txt', (err) =>
{
    console.log("file is renamed");
});
*/

//6: now delete both the file and the folder
/*
fs.unlink('./Rahul/mybio.txt', (err) => {
    console.log("file deleted");
})
*/
fs.rmdir('./osModule', (err) => {
    console.log("Folder deleted");
});
