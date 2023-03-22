var names = ["Andre", "Karl", "Rashida", "Olivia"];

names.forEach((i) => {
  console.log(i);
});

var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

zooAnimals.forEach((i) => {
  console.log(i);
});

var students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

students.forEach((value, i)=>{
console.log(value);
console.log(i)
})

// for (let bottlesOnTheWall = 99; bottlesOnTheWall <= 120; bottlesOnTheWall++) {
//   if (bottlesOnTheWall) {
//     console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
//   } else {
//     console.log(`No more bottles of milk on the wall!`);
//   }
// }

let arr1 = []
for(let i = 1; i <= 99; i++ ){
arr1.push(i)
};
arr1.reverse()

arr1.forEach((value)=> {console.log(value)})
