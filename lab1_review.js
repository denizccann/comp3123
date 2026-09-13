/*
Purpose: Review JS concepts
Prototypes vs Classes
Regular functions, anonymous functions, arrow functions
Callback functions
MERN: N stands for Node.js
*/

// var is global vs. let is local
var globalVariable = 100;
let localVariable = 200;

function functionName() {
    let varInFunc = "local";
}

// console.log(varInFunc); // WILL FAIL

// Prototype - one time use object from a prototype
const oneTimeUseObj = {
    prop1: "Deniz",
    prop2: "comp3123",
    method1: function (param1) {
        console.log(param1);
    }
};

console.log(oneTimeUseObj);
console.log(oneTimeUseObj.prop1);
console.log(oneTimeUseObj.prop2);
oneTimeUseObj.method1("pizza");

// Prototype - using a constructor
function Student(student_name_p, course_p, lunch_p) {
    this.student_name = student_name_p;
    this.course = course_p;
    this.lunch = lunch_p;
    this.method1 = function (param1) {
        return param1;
    };
}

const morning_student = new Student("Deniz", "comp3123", "noodles");
console.log(morning_student);
console.log(morning_student.student_name);
console.log(morning_student.course);
console.log(morning_student.method1(morning_student.lunch));

// Classes (ES6) vs Prototypes
class Prof {
    constructor(prof_name, course) {
        this.prof_name = prof_name;
        this.course = course;
    }

    teach() {
        return this.prof_name + " teaches " + this.course;
    }
}

const morning_prof = new Prof("Deniz", "comp3123");
console.log(morning_prof);
console.log(morning_prof.teach());

// Regular functions, anonymous functions, arrow functions
function regularFunc(param1) {
    return param1;
}

const anonFunc = function(param1) {
    return param1;
};

const arrowFunc = (param1) => param1;

console.log(regularFunc("regular function"));
console.log(anonFunc("anonymous function"));
console.log(arrowFunc("arrow function"));

// Callback functions
function handleStudent(studentName, callback) {
    return callback(studentName);
}

const greeting = handleStudent("Deniz", (name) => {
    return "Welcome " + name;
});

console.log(greeting);