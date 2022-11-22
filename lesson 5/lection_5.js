function per(a,b){
    return (a + b)*2
}

per(100,200);

let x = per(10,20);
console.log(x)

function calculator (a,b,action){

    let result=NaN;
    if(action==='+'){
        result= a+b;
    } else if (action==='-'){
        result= a-b;
    }
    return result

}
let data=calculator (10,30,'+');
console.log(data);

function arrayPrinter(arr){
    for(const item of arr){
        console.log(item);
    }
}

arrayPrinter([1,22,333])

function asd(){
    console.log(arguments)
}

asd(123,234,'asds')


function calc (){
   if (arguments.length===2){
      return arguments[0]+arguments[1];
   }
   else if (arguments.length===3){
       return arguments[0]-arguments[1]-arguments[2]
   }

   return 0;
}

console.log(calc(10,20));
console.log(calc(10,20,30));

function asd(y,...xxx){

    console.log(xxx[4])
}

asd(1,22,333,4444,'fhgk',true,[],{})


function addHTML(tag,text){
    document.write(`<${tag}>${text}</${tag}>`)
}
addHTML('h1','Hello');
addHTML('div','Okten')


let asd=function(){
    console.log(arguments)
}

asd()


let arr=[];
function addToArray(data){
    arr[arr.length]=data
}

addToArray(10);
addToArray(100);
console.log(arr);


let calculator= (a,b)=> {
    let result= a+b;
console.log(result);
return result;
}

let calculator=(a,b)=> a+b;

let user={
    imya:'vasya',
    greeting:function(){
        console.log(`Hello my name is ${this.imya}`);
        console.log(this)
    },
    wife:{
        imya:'anna',
        privyt:function (){
            console.log(this);
            return`hi my name is ${this.imya}`
    },

    hi:()=>{
            console.log(this);
            return `hi my name is ${this.imya}`;
    }
    }
}

console.log(user.greeting())
console.log(user.wife.hi())

console.log(user.wife.privyt());

function asdqwe (text, counter){
    document.write(`<ul>`);
    for (let i=0; i<counter; i++){
        document.write(`<li>${text}</li>`)
    }

}

document.write(`</ul>`);



























