// Assignment - 1
// 1. Write a Node.js program to write 5 countries' names and their details
// into the file "Countries.txt". The file should have the following fields:
// Country Name, Population, GDP, Year of Independence, and Growth Rate.

// Import the 'fs' module to work with the file system
const fs = require('fs');

// Hard coded countries data
const countryData = [
    { name: "India", population: "1.3B", gdp: "2.9T", independence: "1947", growthRate: "7.0%" },
    { name: "USA", population: "331M", gdp: "21.4T", independence: "1776", growthRate: "2.3%" },
    { name: "China", population: "1.4B", gdp: "14.3T", independence: "1949", growthRate: "6.1%" },
    { name: "Germany", population: "83M", gdp: "3.8T", independence: "1871", growthRate: "1.1%" },
    { name: "Japan", population: "126M", gdp: "5.0T", independence: "1952", growthRate: "0.9%" },
];

//creating writestream to write strings, buffer
const writeStream = fs.createWriteStream('Countries.txt');

//for each country data writing in countries.txt via writestream.write() function
countryData.forEach(data => {
    writeStream.write(`{ name: ${data.name}, population: ${data.population}, GDP: ${data.independence}, GrowthRate: ${data.growthRate} }`);
    writeStream.write('\n');  //adding \n to insert a line break between data of each country
})

//on some error console error
writeStream.on('error', (err) => {
    console.log("Error occured", err)
})

//on end of data writing print data writing finished in console
writeStream.end(() => {
    console.log("Data writing finished")
})

//creating readstream to read data from countries.txt
const readStream = fs.createReadStream('Countries.txt', 'utf-8');

//console the data on each chunk of data coming
readStream.on('data', (data) => {
    console.log(data)
})

//on occurence of some error print the error in console
readStream.on('error', (err) => {
    console.log("Error occured", err)
})


// Assignment - 2
// Create a file "input.txt" with random content and an empty "output.txt" file.
// (a) Copy all data from "input.txt" to "output.txt" using streams.
// (b) Display the content of "output.txt" on the console line by line.

//creating output stream and inptustream to read and write
const outputStream = fs.createWriteStream('output.txt');
const inputStream = fs.createReadStream('input.txt', 'utf-8');

let sampleText = `Lorem ipsum dolor sit amet consectetur
adipisicing elit. Velit eligendi dolorem necessitatibus impedit, eos corporis architecto?
Labore ea magnam expedita consequuntur eveniet repudiandae placeat provident saepe, perferendis
voluptatum, laudantium qui ad ipsa necessitatibus. Porro itaque dolorem quis vel, id, nihil delectus
laudantium sit minima placeat illo. Veniam vitae ipsum sunt, at explicabo itaque cum culpa enim iusto blanditiis
minima fugiat aliquam reprehenderit cumque facere repellat saepe dolores recusandae. Excepturi, quo consequatur
perferendis architecto ipsum, praesentium qui quia, nobis atque quod nulla ad similique. Reiciendis ipsum eius
voluptates dolorum esse perspiciatis enim rem numquam vel animi necessitatibus perferendis dolorem repellendus
saepe ad doloribus debitis, officiis aut quia voluptatibus nam ducimus! Cupiditate minus amet qui eum praesentium.`

fs.writeFileSync("input.txt", sampleText);

inputStream.pipe(outputStream);

inputStream.on('error',(err)=>{
    console.log("Some error occured",err);
})

inputStream.on('end',()=>{
    console.log("Data writing finished.")
})