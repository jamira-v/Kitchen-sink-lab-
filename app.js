//variable that contains name as a value
var name = 'Jamira';
//constant that contains the number of states
const states = 50;

//using variable to compute the result of 5+4
var a = 5 + 4;
//runs the computation, there are no quotes when inputing into console.log
console.log(a);

function sayHello() {
    return sayHello;
}

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry" + name + ", you aren't allowed to view this page!");
    }
    console.log('welcome');
    //return "Sorry" + name + ", you aren't allowed to view this page!";
}
var name = 'John';
var age = 18;
checkAge('John', 18);

//initializing the array
var vegetables = ['celery', 'peas', 'corn', 'broccoli'];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'Bean',
    breed: 'Terrier'
};
console.log(pet);

let c = [
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Tom',
        age: 15
    },
    {
        name: 'john',
        age: 22
    },
    {
        name: 'jack',
        age: 21
    },
    {
        name: 'jane',
        age: 23
    },

];

for (let i = 0; i < c.length; i++) {
    console.log(c[i].name, c[i].age);
    checkAge(c[i].name, c[i].age);
};
//the string iterator that is used iterates over characters, found on MDN
function getLength(str) {
    return [...str].length;
}
console.log(getLength('HelloWorld'));

var str = 'geLength';

if (str % 2 == 0) {
    console.log('The world is nice and even');
} else {
    console.log('The world is an odd place');
};



