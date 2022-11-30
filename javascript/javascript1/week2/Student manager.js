const class07Students = ['John', 'Jack', 'Dick', 'Bob', 'Jim', 'Tim'];
function addStudentToClass(studentName) {
    for (let i = 0; i < class07Students.length; i++){
        if (studentName === class07Students[i])
            return `Student ${studentName} is already in the class`;
        }

    if (studentName === 'Margrethe II' && class07Students.length == 6) {
        class07Students.pop();
    }else if (studentName === '') {
        return `You cannot add an empty string to a class`;
    }else if (class07Students.length == 6) {
        return `Cannot add more students to class 07`;
    }
    
    class07Students.push(studentName);
    return class07Students;
}

console.log(addStudentToClass('Margrethe II'));



function getNumberOfStudents() {
  return `There are ${class07Students.length} studets in class 07`;
}

console.log(getNumberOfStudents());