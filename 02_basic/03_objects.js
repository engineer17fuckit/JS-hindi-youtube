
const mysym = Symbol("key 1")

const mysym2 = Symbol("key 2")

const Jsuser ={
    name : "hitesh",
    "full name" :"hitesh chodhary",
    [mysym]: "mykey1",
    age : 17,
    gender : "male",
    email : "thakurajveersingh2002@gmail.com",
    isLogeIn : false,
    lastlogeIn : ["monday", "saturday"]

}
console.log(Jsuser.lastlogeIn);
console.log(Jsuser["age"]);
console.log(Jsuser["full name"]);
console.log(  Jsuser[mysym]);

console.log(Jsuser);

