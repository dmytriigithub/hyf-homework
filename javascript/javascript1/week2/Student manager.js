const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6) {
        if (studentName === '') {
            return `You cannot add an empty string to a class`;
        }else {
            for (let i = 0; i < class07Students.length; i++){
                if (studentName === class07Students[i]){
                    return `Student ${studentName} is already in the class`;
                }
            }
        }
    }else {
        if (studentName === 'Margrethe II') {
            class07Students.pop();
        }else if (class07Students.length == 6) {
            return `Cannot add more students to class 07`;
            }
    }
    
    
    class07Students.push(studentName);
    return class07Students;
}

console.log(addStudentToClass('John'));
console.log(addStudentToClass('Jack'));
console.log(addStudentToClass('Dick'));
console.log(addStudentToClass('Dick'));
console.log(addStudentToClass('Bob'));
console.log(addStudentToClass('Jim'));
console.log(addStudentToClass(''));
console.log(addStudentToClass('Tim'));
console.log(addStudentToClass('Margrethe II'));



function getNumberOfStudents() {
  return `There are ${class07Students.length} studets in class 07`;
}

console.log(getNumberOfStudents());