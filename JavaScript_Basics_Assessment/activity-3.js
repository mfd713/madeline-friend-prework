let students = ["Alice", "Bob", "Chris"];
let input = "";
for(let i = 0; i < 3; i++){
    input = prompt("Please input student name number " + (i+1));
    students[(i+3)] = input;
}

students.forEach(element =>console.log(element));