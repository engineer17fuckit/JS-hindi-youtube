const marvel_heroes = ["ironman","hulk","spiderman"]
const dc_heroes =["batman","superman","flash"]

// marvel_heroes.push=(dc_heroes)

//  const allHeroes=marvel_heroes.concat(dc_heroes)

// console.log(allHeroes);
//spread operator
 
const  all_New_heroes =[...dc_heroes,...marvel_heroes] 

//spread out values comes after output 
 //console.log(all_New_heroes);
   
 const another_array = [1.2,3,4,[5,6,],8,9,[10,11]]

 let useable_array = another_array.flat(Infinity)

 console.log(useable_array);
 
 console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));