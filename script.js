
//part 1
let student = {
    name: "Abhishek",          
    age: 37,                    
    enrolled: true,      
    courses: ["Web", "DBMS", "OS"]  ,
    displayInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Enrolled: ${this.enrolled ? 'Yes' : 'No'}`);
        console.log(`Courses: ${this.courses.join(", ")}`);
    } 
};

console.log(student.name, student.age);
console.log(student.displayInfo());

//part 2

let jsonString= JSON.stringify(student)

console.log(jsonString)

 

let jsonToObject = JSON.parse(jsonString)
console.log(jsonToObject)
