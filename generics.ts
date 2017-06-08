/* Employee Interface with salary*/
interface IEmployee {
    name: string;
    salary: number;
}

/*Student Interface with marks*/
interface IStudent {
    name: string;
    marks: number;
}

/*Generic Class with array two store employees or students*/
class Parent<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}

var employees: Parent<IEmployee> = new Parent<IEmployee>();
var students: Parent<IStudent> = new Parent<IStudent>();


/* Function called by button on HTML to insert employees */
function insertEmployee () {

    // Define variables
    let strUsername : string;
    let numSalary : number;

    //Read values from HTML
    strUsername = (<HTMLInputElement>document.getElementById("txtUserName")).value;
    numSalary = parseFloat((<HTMLInputElement>document.getElementById("txtUserValue")).value);

    //Insert Employee
    let employeeDate : IEmployee = { name:strUsername, salary:numSalary};
    employees.children.push(employeeDate);

    console.log(employees.children);
}

/* Function called by button on HTML to insert students */
function insertStudent () {

    // Define variables
    let strUsername : string;
    let numMarks : number;

    //Read values from HTML
    strUsername = (<HTMLInputElement>document.getElementById("txtUserName")).value;
    numMarks = parseFloat((<HTMLInputElement>document.getElementById("txtUserValue")).value);

    //Insert student
    let studentDate : IStudent = { name:strUsername, marks:numMarks};
    students.children.push(studentDate);

    console.log(students.children);
}