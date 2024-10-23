export let apiKey = 'abcde';
export default "klmno";
console.log("Hello, world!");
console.log("HEllo" + "world!");
console.log(10==5);

function greet(){
    console.log("Hello, world!");
}

greet();

function greet2(userName, message="Well done!"){
    console.log("Hello " + userName + "! " + message);
}

greet2("Ela", "Keep the good work");
greet2("Ela");

function greet3(userName, message="Hello!"){
    return message+ " " + userName;
}

console.log(greet3("Ela"));

function sum(number1, number2, number3){
    return number1 + number2 + number3;
}

console.log(sum(1,2,3));

export default function(){
    console.log("Hello!");
}

export default ()=>{
    console.log("Hello!");
}

export default userName => {...}
export default (userName, userAge) => {...}
number => {return number * 3;}
numer => number * 3;
number => ({age: number});

const userName = "Robert";
const userAge = 43;
const user = {
    name: "Robert",
    age: 43,
    greet(){
        console.log("Hello");
        console.log(this.userAge);
    }
}
console.log(user.name);

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi")
    }
}

const user1 = new User("Monika", 30);
console.log(user1);

const hobbies = ["sports", "cooking", 'reading'];
console.log(hobbies[0]);
hobbies.push('working');
const index1 = hobbies.findIndex( (item) => item == 'sports');
console.log(index1);

const myArr = hobbies.map( (item) => item + "!");
console.log(myArr);
const myArr2 = hobbies.map( (item) => ({text:item}));
console.log(myArr2);

function transformToObjects(numberArray){
    return numberArray.mapp( (item) => ({val:item}));
}
console.log(transformToObjects([1,2,3]));

const userNames = ["Max", "Janiie", "Gosia"];
const firstName2 = userName[0];
const [firstName, secondName, thirdName] = ["Max", "Janiie", "Gosia"];
console.log(firstName + ", " + secondName + ", " + thirdName);

const {name3, age3} = {name3: "Robert", age3: 40};
console.log(name3, age3);

const {name: name4, age4} = {name: "Robert", age4: 40};
console.log(name4, age4);

function storeOrder(order){
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}

function storeOrder2({id, currency}){
    localStorage.setItem('is', id);
    localStorage.setItem('currency', currency);
}

storeOrder({id: 5, currency:"USD", amount:15.99});

const hobbies5 =['sports', 'cooking', 'reading'];
const mergedHobbies = [...hobbies5];
const icecream = ['vanilla', 'chocolate', 'berry'];
console.log(mergedHobbies);
const mergedLists = [...hobbies5, ...icecream];
console.log(mergedLists);
const mergedLists2 = [hobbies5, icecream];
console.log(mergedLists2);

const user10 = {
    name: "John",
    age: 36
}
const extendedUser = {
    isAdmin: true,
    ...user10
}
console.log(extendedUser);

const password = prompt("Your password");
if (password === "Hello"){
    console.log("Hello, it works");
} else if (password === "hello"){
    console.log("hello, it works");
} else{
    console.log("Access denied");
}

const hobbies6 = ['sports', 'cooking', 'reading'];
for (const hobby of hobbies6){
    console.log(hobby);
}

const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting(){
    document.getElementById("demo").innerHTML = "HAppy Birthday!"
}

setTimeout( () => {console.log("More time out..."), 4000});


let userMessage = "Hello world!";
userMessage = userMessage.concat("!!!!!")
const hobbies7 = ['sports', 'cooking'];
hobbies7.push('working');

function callMe(name){
    console.log(name);
}

const callMe = function(name){
    console.log(name);
}

const callMe = (name) => {
    console.log(name);
}

const callMe = () => {
    console.log("Max!");
}

const callMe = name => {
    console.log(name);
}

const returnMe = name => {
    return name;
}


class Person {
    constructor (){
        this.name = "Max";
    }
}

const person = new Person();
console.log(person.name);

class Person1 {
    name = "Max";
}
const person1= new Person1();
console.log(person1.name)

class Person2 {
    name = "Max";
    printMyName(){
        console.log(this.name);
    }
}
const person2= new Person2();
person.printMyName();

class Person4 {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
const person4 = new Person4();
person.printMyName();

class Human {
    species = 'human';
}
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
const person5 = new Person();
person.printMyName();
console.log(person5.species);

const callMe = function(name) { 
    console.log(name);
}

const returnMe = name => { 
    return name;
}
