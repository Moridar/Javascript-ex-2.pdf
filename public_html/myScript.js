/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var students = [];


function updateAll() {
    updateDiv(1, "firstname");
    updateDiv(2, "lname");
    updateDiv(3, "phone");
    updateDiv(4, "email");
}
function updateDiv(divId, inputId) {
    document.getElementById(divId).innerHTML = document.getElementById(inputId).value;
}

function getStudent() {
    var student = {
        id: document.getElementById("studId").value,
        fullName: document.getElementById("name").value,
        classRoom: document.getElementById("CR").value
    };
    return student;
}


function adminStud(student, callback) {
    callback(student);
}

function logItem(Student) {
    for (var item in Student) {
        console.log(item + ": " + Student[item]);
    }
}
function registerItem(Student) {
    students.push(Student);
    console.log("Student registered, now " + students.length + " in array")
}

var elements = document.getElementsByTagName('button');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (j) {
        return function () {
            console.log('You clicked button no:' + j);
        }
    }(i));
}

var add = (function () {
    var counter = 0;
    return function () {
        return counter+=1;
    }
})();
