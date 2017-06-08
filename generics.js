/*Generic Class with array two store employees or students*/
class Parent {
    constructor() {
        this.children = [];
    }
}
var employees = new Parent();
var students = new Parent();
/* Function called by button on HTML to insert employees */
function insertEmployee() {
    // Define variables
    let strUsername;
    let numSalary;
    //Read values from HTML
    strUsername = document.getElementById("txtUserName").value;
    numSalary = parseFloat(document.getElementById("txtUserValue").value);
    //Insert Employee
    let employeeDate = { name: strUsername, salary: numSalary };
    employees.children.push(employeeDate);
    console.log(employees.children);
}
/* Function called by button on HTML to insert students */
function insertStudent() {
    // Define variables
    let strUsername;
    let numMarks;
    //Read values from HTML
    strUsername = document.getElementById("txtUserName").value;
    numMarks = parseFloat(document.getElementById("txtUserValue").value);
    //Insert student
    let studentDate = { name: strUsername, marks: numMarks };
    students.children.push(studentDate);
    console.log(students.children);
}
