const students = [];

const addStudent = (obj) => {
    students.push(obj);
}

const student1 = {
    name: "Sam",
    subject: "Math",
    score: 60
}
const student2 = {
    name: "Katherine",
    subject: "Game Design",
    score: 20
}
const student3 = {
    name: "Jacob",
    subject: "Basket Weaving",
    score: 45
}
const student4 = {
    name: "Rose McGlue",
    subject: "Crafts",
    score: 30
}
const student5 = {
    name: "Christopher",
    subject: "English",
    score: 80
}

addStudent(student1);
addStudent(student2);
addStudent(student3);
addStudent(student4);
addStudent(student5);

console.log(students);

for (let prop in students) {
    console.log(`${prop.name} has a score of ${prop.score} in ${prop.subject}`);
}

for (let i = 0; i < students.length; i++) {
    if(students[i].score >= 70){

        console.log(`${students[i].name} has a score of ${students[i].score} in ${students[i].subject}`);
    }
}

let totalScore = 0;

for(let i = 0; i < students.length; i++){
    totalScore += students[i].score;
}
totalScore = totalScore / students.length;
console.log(totalScore);


