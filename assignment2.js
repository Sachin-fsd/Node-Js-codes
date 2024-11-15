//Assignment 2

// 1. Do the following operations:
// (a) Print the length of the buffer on the console.
// (b) Print the 6th and 8th index values
// (c) Modify the value at index 2 (change the number 89 
// to 23) and then print the modified buffer on the 
// console. 

let buffer = Buffer.from([10, 34,89,123, 34 ,56, 78, 444, 342 ,45, 566, 5]);  //defined a buffer
console.log(buffer.length);  //prints length of buffer

console.log(buffer[6], buffer[8]);

buffer[2] = 23;  //changes the 2nd index value to 23
console.log(buffer)  // prints the buffer

// 2) Create a program in Node js to create a buffer of 
// size 100. 
// You need to write a string "We are learning buffer 
// module today and enjoying" and then you need to 
// read and print the contents of the buffer.

let buf2 = Buffer.alloc(100); //allocates the memory for 100 characters
buf2.write("We are learning buffer module today and enjoying");  // writing data in buffer
console.log(buf2.toString())  //printing buffer

// 3) Create a program in Node js to create two buffers 
// with the strings "JavaScript is easy" and "We are 
// learning and understanding". You need to add them 
// together or concatenate them into a single buffer and 
// 4) Find the total length of the final buffer also print 
// them on console.
// Also try to slice the value of the final buffer and 
// extract word "easy" from it.
// Also convert back to string again.

let buffer1 = Buffer.from("JavaScript is easy");   //created buffer 1
let buffer2 = Buffer.from("We are learning and understanding");   //created buffer 2

let finalBuffer = Buffer.concat([buffer1, buffer2])  //joined both buffer1 and buffer2

console.log(finalBuffer.length)  //prints finalbuffer length
console.log(finalBuffer)  // prints finalbuffer

let startIndex = finalBuffer.indexOf("easy");  //starting index of easy word in finalbuffer is returned
let endIndex = startIndex + "easy.length";  //from starting index of easy , final index which is length of word easy (4)
let slicedBuffer = finalBuffer.slice(startIndex, endIndex);  // takes out the part starting index to finalindex of word easy in final buffer

console.log(slicedBuffer)  // prints slicedbuffer
console.log(slicedBuffer.toString())  //prints slicedbuffer in string format

// 5) Write a program in which you are given a buffer 
// with a string "Our exams are coming and we are 
// preparing for it". Design a function to find the starting 
// index of the substring "coming" within the buffer. 
// If the substring "coming" is not there in the buffer or 
// does not exist, then return -1.
// (hint : create javascript function to do this problem)

// Create a buffer with the given string
let buffer = Buffer.from("Our exams are coming and we are preparing for it");

function findSubstringIndex(buffer, substring) {
    // Convert the buffer to a string
    let bufferString = buffer.toString();

    // Find the starting index of the substring
    let index = bufferString.indexOf(substring);

    // Return the index if found, otherwise -1
    return index !== -1 ? index : -1;
}

// Test the function
let substring = "coming";
let index = findSubstringIndex(buffer, substring);

console.log(`The starting index of the substring "${substring}" is:`, index);
