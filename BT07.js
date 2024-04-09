"use strict";
class Student {
    constructor(id, name, className) {
        this.id = id;
        this.name = name;
        this.class = className;
    }
}
function createStudentArray(students, className) {
    console.log(studentArray);
}
let studentArray = [
    new Student(1, "John", "Class A"),
    new Student(2, "Jane", "Class B"),
    new Student(3, "Mike", "Class A"),
];
let className = "Class A";
createStudentArray(studentArray, className);
