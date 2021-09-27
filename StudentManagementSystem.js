let numberOfStudents = 0;

function addStudent(name){
    students.push(name);
    numberOfStudents = students.length;
}

let students = [];

function clearStudents(name){
    students = []
    numberOfStudents = 0;
}

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

// function getStudentByInitials(name, initial){
//     return (name[0]==initial);
// }

function isFullName(name){
    return typeof(name.split(' ')[1])=='string'
}

isFullName('John Doe')

function getStudentsByInitials(firstInitial,
secondInitial)  {
    let index = 0;
    let output = [];
    while(index<students.length-1){
        if(isFullName(students[index]) &&
        students[index].split(' ')[0][0] == firstInitial &&
        students[index].split(' ')[1][0] == secondInitial){
            output.push(students[index]);
        }
        index++;
    }
    return output;
}

addStudent('John Doe');
addStudent('Josh');

addStudent('Bill Whethers');
console.log(students);
console.log(getStudentsByInitials('J','D'));


