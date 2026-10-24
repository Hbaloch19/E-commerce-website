// let name = 'hanadi';
// let f_name = "ali";
// let stdname = `hanadi`;

// console.log(name);
// console.log(f_name);
// console.log(stdname);

// let number = 123;
// let price = 12.54;
// console.log(price);

// let isStudent = true;
// let isLoggedIn = false;
// console.log(isStudent);
// console.log(isLoggedIn);

// let city;
// console.log(city);

// let contact = null;
// console.log(contact);

// let name = "hanadi";
// console.log(typeof name);


// let a = 2;
// let b = 3;

// console.log(a**b);



// let a = 10;

// a/=20;
// console.log(a);


// let x = 5;
// console.log(x==10);

// let a = 20;
// let b = "20";
// console.log(a===b);


// let x = 5;
// console.log(x!=="5");

// let marks = 50;
// console.log(marks<80);

// let age = 5;
// console.log(age<=10);
// let marks = 40;
// console.log(marks<=20);

//if condition:

// let age = 50;
// if(age<=18){
//     console.log("you can vote"); 
// }
// else{
//     console.log("you cant vote");  
// }

// let marks = 40;
// if(marks <= 50){ 
//     console.log("pass");
    
// }
// else{
//     console.log("fail");
    
// }

// let marks = 40;
// if(marks >= 80){
//     console.log("grade A");
    
// }
// else if(marks >= 60){
//     console.log("grade b");
    
// }

// else{
//     console.log("fail");
    
// }

//switch statement :
// let day = 1;
// switch(day){
//     case 1:
//         console.log("MONDAY");
//         break;
//         case 2:
//         console.log("TUESDAY");
//         break;
//         case 3:
//         console.log("friday");
//         break;
//          case 4:
//         console.log("saturday");
//         break;
//          case 5:
//         console.log("sunday");
//         break;
//         default:
//             console.log("invalid statement");
            
        
// }

// let color = "blue";

// switch(color){

// case "red":
// console.log("Stop");
// break;

// case "green":
// console.log("Go");
// break;

// case "yellow":
// console.log("Wait");
// break;

// default:
// console.log("Unknown Color");

// }
//ternary statement
// let age = 20;
// age <= 18 ?
// console.log("Adult") :
// console.log("minor");

//logical operator

//AND opertaor
// let age = 20;
// let hasID = false;
// console.log(age>=18 && hasID);

//OR operator
// let marks = 45;
// let sportsQuota = true;

// console.log(marks >= 50 || sportsQuota);

//NOT operator
// let isloggedIN = false;
// console.log(!isloggedIN);

// let username = "admin";
// let password = "1234";

// console.log(username === "admin" && password === "12345");


// for(let i=8; i<=20; i++){
//     console.log(i);
// }

// for(let i=2; i<=20; i+=2){
//     console.log(i);
// }

// for(let i=5; i>=1; i--){
//     console.log(i);
    
// }

// const cars = ["BMW","VOLVO","SAAB","FORD"];
// console.log(cars.length);


// const colors = ["red","blue","yellow","black","purple"];
// console.log(colors);

// const cars = ["BMW","VOLVO","SAAB","FORD","mercedes","audi"];
// for(let i=0; i<7; i++){
//     console.log(cars[i]);
    
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 10;
// while(i>=1){
//     console.log(i);
    
//     i--;
// }

// let fruits = ["apple","mango","pineapple","orange","banana","grapes"];
// let  i = 0;
// while(i<5){
//     console.log(fruits[i]);
//     i++;
    
// }
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// let num = 89;
// for (let i=1; i<=10; i++){
//     console.log(num + "X" + i+"="+(num*i));
// }

// let num1 = "javascript is a 'interactive' language";
// console.log(num1);
// let num2 = 'javascript is a "interactive" language';
// console.log(num2);

// let text = `He's often called "Johnny"`;
// console.log(text);

// let text = "faizan";
// console.log(text.length);

// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text);

// let message = "hello \t welcome to js class";
// console.log(message);

// let text = "This is a backslash: \\";
// console.log(text);

// let text = "89";
// console.log(text);
//  let x = 10;
//  let y = 20;
//  console.log(x+y);
 
// let x = 123e-8;
// console.log(x);

// let x = 0.5;
// let y = 0.2;
// console.log(0.5+0.2);

// let name = prompt("Enter Student Name:");
// let english = Number(prompt("Enter English Marks:"));
// let math = Number(prompt("Enter Math Marks:"));
// let computer = Number(prompt("Enter Computer Marks:"));
// let physics = Number(prompt("Enter Physics Marks:"));
// let chemistry = Number(prompt("Enter Chemistry Marks:"));
// let total = english + math + computer + physics + chemistry;
// let percentage = (total / 500) * 100;
// let grade;

// if (percentage >= 90) {
//     grade = "A+";
// }
// else if (percentage >= 80) {
//     grade = "A";
// }
// else if (percentage >= 70) {
//     grade = "B";
// }
// else if (percentage >= 60) {
//     grade = "C";
// }
// else if (percentage >= 50) {
//     grade = "D";
// }
// else {
//     grade = "F";
// }
// let result;

// if (percentage >= 50) {
//     result = "PASS";
// }
// else {
//     result = "FAIL";
// }
// document.write("Name: " + name + "<br>");
// document.write("Total Marks: " + total + " / 500<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Result: " + result);


// let Name = prompt("Enter you Name");
// let English = Number(prompt("Enter your English Marks"));
// let computer = Number(prompt("Enter your computer Marks"));
// let Maths = Number(prompt("Enter your Maths Marks"));
// let Total = English + computer + Maths;
// let percentage = (Total/500)*100;

// let grade;
// if(percentage>=90){
//     grade = "A+";
// }
// else if(percentage>=80){
// grade = "A";
// }
// else if(percentage>=70){
// grade = "B";
// }
// else if(percentage>=60){
// grade = "c";
// }
// else{
// grade = "f";
// }

// let result;
// if(percentage>=60){
//     result="PASS";
// }
//     else{
//         result = "FAIL";
//     }
//     document.write("Name: " + Name + "<br>");
// document.write("Total Marks: " + Total + " / 500<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Result: " + result);


//CREATE A FUNCTION:
// function greet(){
//     console.log("welcome students!")
// }
// greet();
// greet();
// greet();

// function Greet(name){
// console.log("hello", name);

// }
// Greet("nimra");

// function addition(a,b){
//     return a+b;
    
// }
// let result = addition(10,20)
// console.log(result);

// function subtraction(num3,num4){
//     console.log(num3-num4);
    
// }
// subtraction(90,50);
// subtraction(70,10);
// subtraction(50,30);
// subtraction(90,50);
// subtraction(70,10);
// subtraction(50,30);
// subtraction(90,50);
// subtraction(70,10);
// subtraction(50,30);


// function quiz() {

//     let answer = prompt("What is 5 + 5?\n1. 10\n2. 15\n3. 20");

//     if (answer == 1) {

//         document.getElementById("result").innerText = "Correct!";

//     } else {

//         document.getElementById("result").innerText = "Wrong!";

//     }
// }

// function quiz() {

//     let score = 0;

//     let answer1 = prompt(
//         "Q1: What is 5 + 5?\n1. 10\n2. 15\n3. 20"
//     );

//     if (answer1 == 1) {
//         score++;
//     }

//     let answer2 = prompt(
//         "Q2: Which language is used for web development?\n1. Python\n2. JavaScript\n3. C++"
//     );

//     if (answer2 == 2) {
//         score++;
//     }

//     let answer3 = prompt(
//         "Q3: Which keyword is used to declare a variable?\n1. let\n2. print\n3. input"
//     );

//     if (answer3 == 1) {
//         score++;
//     }

//     document.getElementById("result").innerText =
//         "Quiz Completed! Your Score: " + score + "/3";
// }

//function expression:-
// let greet = function(){
//     console.log("helloooo ");
    
// }
// greet();

//arrow function:
// const greet = () =>{
//     console.log("javascript");
    
// }
// greet();

// function students(){
//     alert("learning web develoment")
// }

// function showCourse(course){
// alert("you selected:" + " " + course);
// }

// function show(){
//  prompt("enter ur name");
// }

// function keypress(){
//    console.log("a key was pressed");
   
// }

// function submitbtn(){
//     alert("form submit");
// }
// function showCourse(course) {
//     alert("You selected: " + course);
// }

// function showName() {
//     let name = document.getElementById("name").value;
//     document.getElementById("result").innerText =
//         "Hello " + name;
// }
// function keyPressed() {
//     console.log("A key was pressed");
// }
// function courseChanged() {
//     let course = document.getElementById("course").value;
//     document.getElementById("result").innerText =
//         "You selected: " + course;
// }
// function mouseOver() {
//     document.getElementById("title").innerText =
//         "Ready to Submit!";
// }
// function mouseOut() {
//     document.getElementById("title").innerText =
//         "Student Registration";
// }


// function submitForm() {
//     let name = document.getElementById("name").value;
//     document.getElementById("result").innerText =
//         "Registration Successful! Welcome " + name;
// }

// function showname(){
//     let name = document.getElementById("name").value;
//     document.getElementById("result").innerText = "hello" + " " + name;
// }
// function keypress(){
//     console.log("a key was pressed");
    
// }
// function select(){
// let Course = document.getElementById("course").value;
//     document.getElementById("result").innerText = "you selected:" + " " + Course;
// }
// function mouseover(){
//     document.getElementById("title").innerText = "Ready to submit";
// }
// function mouseout(){
//     document.getElementById("title").innerText = "Registration successfull";
// }
// function submitForm() {
//     let name = document.getElementById("name").value;
//     document.getElementById("result").innerText =
//         "Registration Successful! Welcome " + name;
// }


// let fruits = ["banana","mango"];
// fruits.unshift("apple");
// console.log(fruits);

// let fruits = ["banana","mango",'apple'];
// let position = fruits.indexOf("mango");
// console.log(position);

// let marks = [23,50,70,89,90];
// let result = marks.find(function(marks){
//     return marks>=50;
  
    
// })
// console.log(result);

// let fruits = ["apple","mango","pineapple","banana"];
// let result = fruits.slice(1,5);
// console.log(result);

// let colors = ["red","blue","yellow"];
// colors.unshift("green");
// console.log(colors);

// let fruits = ["apple", "mango","Banana","Pinapple"];
// fruits.sort();
// console.log(fruits);

// let numbers = [67,8,9,0,13]
// numbers.sort();
// console.log(numbers);

// let numbers = [40, 10, 100, 25];

// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);

// let fruits = ["apple", "mango","Banana","Pinapple"];
// let result = fruits.join(" ");
// console.log(result);

// let boys = ["Ali", "Ahmed"];
// let girls = ["Sara", "Ayesha"];

// let students = girls.concat(boys);

// console.log(students);









// // join
// let fruit =["mango","apple","pineapple"];
// fruit.push("banana");
// console.log(fruit);




// // index(of)
// let fruits =["mango","pple","pineapple"];
// let position = fruits.indexOf("mango");
// console.log(position);

// let fruits = ["Apple","Banana","Orange","Mango"];
// let result = fruits.slice(1,5);
// console.log(result);

// let person = {
//     name : "Ali",
//     age : 15,
//     course : "Computer Science"
// }
// console.log(person.age);
// console.log(person.course);


// let student={
//     name : "hanadi",
//     marks : 60
// }
// student.course="web designing";
// console.log(student);

// let student={
//     name : "hanadi",
//     marks : 60
// }
// delete student.marks;
// console.log(student);

// let student={
//     name : "hanadi",
//     marks : 60,
//     subjects:["urdu","english"]
// }

// console.log(student);



// function hideText(){
//     document.getElementById("demo").style.display ="none";
// }
// function showText(){
//     document.getElementById("demo").style.display ="block";
// }


//  function changeText(){
//         document.getElementById("demo").innerHTML="hello students";
//     }

// alert("helloooooo");
// document.write("<h1>welcome to &nbsp class <br></h1>");
// document.write("<h6>HTML</h6>");
// console.log("welcome"); document.write("<h1>welcome to &nbsp class <br></h1>");
// console.log("students");
// console.log("welcome");
// console.log("students");

// console.log("AHMED");
// console.log("Ali");
// console.log("Ali");

//variable
// let studentName = "ali";
// console.log(studentName);
// console.log(studentName);
// console.log(studentName);
// console.log(studentName);

// let city = "islamabad";
// let cityy = "karachi";
// document.write(city);
// console.log(cityy);

// let name = "taha";
// console.log(name);

// let age = 70;
// console.log(age);

// let studentID = 6789;
// console.log(studentID);
// console.log(studentID);
// console.log(studentID);
// console.log(studentID);
// console.log(studentID);

// let name = "hanadi";
// console.log(name);

// name = "esha";
// console.log(name);

// let age = 10;
// console.log(age);


// const country =  "pakistan";
// console.log(country);
// country = "india";
// console.log(country);

// const age = 10;
// const age1 = 20;


// var namee = "hussain";
// console.log(namee);
//  namee = "alifyah";
//  console.log(namee);

//  var age = 10;
//  var age = 11;
//  var age = 12;
//  console.log(age);
 
//  let name = 'we are learning "javascript" ';
//  document.write(name)
 
// var text = `we are learning "javascript"`;
// console.log(text.length);
 
// let text = "We are the so-called \"Vikings\" from \t\t\tthe north.";
// console.log(text);
// let textt = "This is a backslash: \\";
// console.log(text);

// let age = 545e-5;
// let price = 99.5;
// console.log(age);

// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(0.5+0.1);





// let age = 10;

// if ( age >= 18){
//     console.log("you can vote");
    
// }
// else{
//     console.log("you cant vote");
    
// }

// let marks = 49.5;
// if(marks >= 50){
//     console.log("pass");
    
// }
// else{
//     console.log("fail");
    
// }

// let a = 2;
// let b = 3;
// console.log("Addition of numbers is" ,a+b);
// console.log("subtraction of numbers is",a-b);
// console.log("multiply of numbers is",a*b);
// console.log("division of numbers is",a/b);
// console.log("MOD of numbers is",a%b);
// console.log("Exponent of numbers is",a**b);

// let marks = 50;
// marks /= 30;
// console.log(marks);

// let x = 10;
// console.log(x == 10);

// let a = "10";
// let b = "10";

// console.log(a === b);

// let x = 10;
// console.log(x != 10);

// console.log(10 !== 10);

// let marks = 90;

// console.log(marks >= 80);

// let marks = prompt("Enter your marks");
// if(marks>=80){
//     console.log("Grade A");
    
// }
// else if(marks>=70){
//     console.log("Grade B");
    
// }
// else if(marks>=60){
//     console.log("Grade c");
    
// }
// else{
//     console.log("fail");
    
// }

//switch statement :

//  let day = 1;
//  switch(day){

//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("wednesday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         default:
//             console.log("invalid day");
            
//  }
// let age = 10;
// age >= 8 ?
// console.log("adult")
// :
// console.log("minor");

// for(let i = 0; i<=50; i++)
// {
//     console.log(i);
    
// } 

// for(let i = 1; i<=20; i+=2){
//     console.log(i);
    
// }
 
// for(let i = 20; i>=2; i+=2){
//     console.log(i);
    
// }

// const fruits = ["mango", "apple","grapes","pineapple","strawberry" , "banana"];
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
    
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i =1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5);

// let i = 1;
// do{
//     console.log(i);
//     i++;

// }while(i<=5);  

//js with break :

// for(let i = 1; i<=10; i++){
// if(i==9){
//     break;
// }
// console.log(i);
// }

// let i = 1;
// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let sum = 0;
// for(let i = 1; i<=20; i++){
//     sum=sum+i;
// }
// console.log(sum);

// const students = ["Ali", "Sara", "Ahmed", "Ayesha","tayyaba"];

// for (let i = 0; i < students.length; i++) {

//     if (students[i] === "Sara") {
//         console.log("Student Found!");
      
//     }
//     else{
//         console.log("student not found");
//     }

//     console.log(students[i]);
// }


// const students = ["Ali", "Sara", "Ahmed", "Ayesha"];

// let searchName = "hanadi";
// let found = false;

// for (let i = 0; i < students.length; i++) {

//     if (students[i] === searchName) {
//         console.log("Student Found!");
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     console.log("Student Not Found!");
// }


// function welcome(){
//     console.log ("welcome to \n js");

    
// }

// welcome();
// welcome();
// welcome();
// welcome();

// function greet(name) {
//     console.log("hello" , name);
    
// }
// greet("tayyaba");
// greet("hanadi");

// function add(num1,num2,num3,num4){
//     console.log(num1 + num2 +num3 +num4);
    
// }
// add(40,50,60,70);
// add(10,40,30,20);

// function addition(a,b){
// return a+b;
// }
// let result = addition(10,5);
// console.log(result);


//calculation
// function calculate(){
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// let add = num1 +num2;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;

// document.write("Addition:" + add +"<br>");
// document.write("Subtraction:" +sub +"<br>");
// document.write("Multiplication:" + mul+"<br>");
// document.write("Division:" + div + "<br>");
// }

// calculate();

// function calculateTotal(math, english, science) {
//     return math + english + science;
// }

// let total = calculateTotal(80, 75, 90);

// console.log("Total Marks: " + total);

// let student = {
//     name:"hanadi",
//     course:"web designing",
    
// }
// delete student.course;
// student.marks=70;
// student.rollno=111;
// console.log(student);



// student.course = "web development";
// console.log(student);
// console.log(student.marks);
// console.log(student.course);
// console.log(student);

// console.log(student.name);


// let student = {
//     name:"hanadi",
//     course:"web designing",
    
// }
// console.log(student["course"]);


// let student = {
//     name:"hanadi",
//     course:"web designing",
//     subjects:["english","programming","maths"]
    
// }
// console.log(student);


// let person = {
//     name: "Ali",
//     age: 25,
//     welcome:function(){
// console.log("Welcome to the website!");
//     }
// }


// console.log(person);
// console.log(person.welcome())


let student ={
    name:"sohail",
    english:90,
    maths:80,
    computer:70,
}
let total = student.english + student.maths + student.computer;
let percentage = (total/300)*100;
console.log("student name:",student.name);

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");