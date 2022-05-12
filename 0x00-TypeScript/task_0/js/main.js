var student1 = {
    firstName: 'Paula',
    lastName: 'Hernandez',
    age: 26,
    location: 'Colombia'
};
var student2 = {
    firstName: 'Milton',
    lastName: 'Hernandez',
    age: 17,
    location: 'Chile'
};
var studentsList = [student1, student2];
console.log(Object.entries(studentsList[0]));
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    for (var _i = 0, _a = Object.entries(student); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === 'firstName' || key === 'location') {
            var cell = row.insertCell();
            var text = document.createTextNode(value);
            cell.appendChild(text);
        }
    }
});
document.body.appendChild(table);
