// WRITE YOUR CODE HERE
let studentList = ["Hayden", "Ross", "Leland"];

console.log(studentList.length);

console.log(`Welcome to the class ${studentList[0]}, ${studentList[1]}, and ${studentList[2]}`);

studentList[0]="Hunter";
console.log(studentList[0])

if (!studentList.includes("Hayden")){
    console.log(`${studentList[0]} is in class!`)
}
