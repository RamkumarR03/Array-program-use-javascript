
//First Question...

// let num;
// for(num=1;num<=100;num++){
// if(num%3==0 && num%5==0){
//     document.write("FIZZBUZZ");
// }
// else if(num%5==0){
//     document.write("BUZZ");
// }
// else if(num%3==0){
//     document.write("FIZZ");
// }
// }

//Second Question....

//  let str="madam";
// let str1=str.split("").reverse().join("");
// if(str==str1){
//     console.log("Palindrome");  
// }
// else{
//     console.log("Not Palindrome");
// }



//third Question....

// let arr1=[1,2,3,4,5];
// let arr2=arr1.sort();
// {
// document.write("Largest value is :"+ arr2[arr2.length-1]);
// }

// 4th Questions....

// function countCharacterOccurences(str){
//     const charCount={};
//     for(let i=0;i<str.length;i++){
//     const char=str[i];
//     if(charCount[char]){
//         charCount[char]++;
//     }
//     else{
//         charCount[char]=1;
//     }
//     }
//     return charCount;
// }
// const result=console.log(countCharacterOccurences("Hello"));
// console.log(result);



//5th Question...

// function longeststr(str){
//     let max = 0;
//     let longestword = "";
//     let words = str.split(" ");
//     for(let i=0; i<words.length; i++){
//         if(words[i].length > max){
//             max = words[i].length;
//             longestword = words[i];
//         }
//     }    
//     console.log(longestword)
// }
// let str=("I am Ram");
// console.log(longeststr(str));


// 6th Question....

// function factorial(number){
//         if(number === 0){
//             return 1;
//         }
//         else{
//             return number * factorial(number-1);
//         }       
//     }
//     console.log(factorial(3));


// const person={
//     fname:"Ram",
//     lname:"R",
//     name:function(){
//   console.log(this.fname + this.lname);
//     }
// }
// person.name()


//  ARRAY Questions.........


//1. Array Creation and Initialization

let fruits=["apple","orange","Mango"];
document.write(fruits);

//2.Array Manipulation

//push.. 

let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);

//unshift...

let arr1=[10,20,30];
arr1.unshift(40);
console.log(arr1);

// pop()...

let arr2=[1,2,3,4];
arr2.pop();
console.log(arr2);

// shift()...

let num=[10,20,30,40];
num.shift(30);
console.log("shifting the num is :"+num);

//3.Array Searching

//INdexOf()...

let num1=[1,2,3,4,5];
num1.indexOf();
console.log("indexOf num1 is :" + num1.indexOf(3));

//find()...
// let num2=[10,20,30,40];
// num2.find(30);
// console.log(num2.find(30));

//4.Array Filtering....
let num3=[31,35,33,34,32,36];
let evenNumber=num3.filter(function(num3){
    return num3%2==0;
});
console.log(evenNumber);

// 5.Array Sorting...
let num4=[31,35,33,34];
num4.sort();
console.log("Sorting Arrays is:"+num4);


