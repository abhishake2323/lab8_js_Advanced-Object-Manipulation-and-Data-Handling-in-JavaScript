
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


//part-3 DESTRUCTURING OBJECT

console.log("De-structuring an student object")
let { name, age, enrolled, courses } = student;

console.log(name);       
console.log(courses);    

console.log("Creating an array of scores")

let myarr= [85,92, 78,90];

let [firstScore, secondScore] = myarr;
console.log("Array is ["+myarr+"]")
console.log(firstScore)
console.log(secondScore)
