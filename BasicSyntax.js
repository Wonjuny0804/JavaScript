// javascript에서는 주석은 //이렇게 처리한다. 

//변수 선언
let value = 1;
const a = 1;

//Actually in the past they used var
var b = 1;
var c = 2;

// string 
let text = 'There is something wrong with me';
let name = "Wonjun Jang";

// Boolean 
let good = true;
let bad = false;

// null, undefined
let theWorld = null;
let Myfuture = undefined;

let something  = 1;
something++; // -> after the operation something + 1
++something;// -> before the operation something  + 1
console.log(something);

//논리연산자
let value = true;
value = false; 

//JavaScript에서는 이렇게 만든다.
//NOT AND OR
// !  &&  ||
//Priority = > NAO

const a = !false;
const b = true && true;
const c = true || false;
const d = !true;

const value = !(true && false || true && false || !false);

// 비교 연산자
const a = 1;
const b = 2;
const equals = a === b;
const notEquals = a !== b;
console.log(equals,notEquals);

// JS에서는 무조건 ===를 사용한다. !== 과 마찬가지로
const a = "Hello";
const b = 'Wolrd';

//조건문
const a = 1;
if (a+1 === 2){
    console.log("a+1 is 2"+a);
}
console.log('The a outside is a'+a);

//if-else if- else
const name = "Jang Wonjun";
if (name === 'Jang Wonjun'){
    console.log("It's you Wonjun!");
}
else if (name === 'Jang Wonseok'){
    console.log('Oh you again..');
}
else console.log('Who the hell are you?');

//switch-case 

const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('iphone!');
        break;
    case 'ipad':
        console.log('ipad!');
        break;
    case 'applewatch':
        console.log('applewatch!');
        break;
    case 'galaxy note':
        console.log('Who would use SAMSUNG!');
        break;
    default:
        console.log('There is no default.');
}

//function
function hello(name){
    console.log(`Hello ${name}`);
}
hello('Wonjun');
hello('Wonseok');

//화살표 함수
const add = (a, b) => { return a + b;}
const bye = (name) => { console.log(`Bye ${name}`); }
const subtract = (a, b) => { return a - b; }
const subtract2 = (a, b) => a - b;
// so basically the things on the left side of the arrow
//  is the variables and the thing on the right side of
// the arrow is the return value

//object
const dog = {
    name: 'Sam',
    age: 2,
    cute: true,
    puppy: {
        son: Jim,
        daughter: Kelly,
    }
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

// class