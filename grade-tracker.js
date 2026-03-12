// Student Grade Tracker

let students = [
  { name: "Alice", grade: 80 },
  { name: "John", grade: 70 },
  { name: "Mary", grade: 90 }
];

students.forEach(function(student) {
  console.log(student.name + " scored " + student.grade);
});

let total = 0;

for (let i = 0; i < students.length; i++) {
  total += students[i].grade;
}

let average = total / students.length;

console.log("Average grade:", average);
