
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


//part-4 spread operator

 
const clonedStudentObject = { ...student };

console.log(clonedStudentObject);

clonedStudentObject.graduationYear = '2025'
console.log(clonedStudentObject.graduationYear);

let newCourses =["Data science","Statistics","Networking"]
let mergedCourses = [...student.courses,...newCourses]
console.log(mergedCourses)


student.addCourses = function( newCourses) {
    return  this.courses = [...this.courses,...newCourses]
  };

console.log(`Before adding courses: ${student.courses}`)
student.addCourses(newCourses);
console.log(`After adding courses: ${student.courses}`)

student.getNumberOfCourses = function (){
    return this.courses.length;
}

console.log(`Total number of courses : ${student.getNumberOfCourses()}`)