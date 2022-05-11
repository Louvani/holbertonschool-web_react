interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: Student = {
  firstName: 'Paula',
	lastName: 'Hernandez',
	age: 26,
	location: 'Colombia'
}
let student2: Student = {
  firstName: 'Milton',
	lastName: 'Hernandez',
	age: 17,
	location: 'Chile'
}

const studentsList: Student[] = [student1, student2];

console.log((<any>Object).entries(studentsList[0]))

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student) => {
  let row: HTMLTableRowElement = table.insertRow();
  for (let [key, value] of (<any>Object).entries(student)) {
    if (key === 'firstName' || key === 'location') {
      let cell: HTMLTableCellElement = row.insertCell()
      let text = document.createTextNode(value)
      cell.appendChild(text)
    }
  }
})

document.body.appendChild(table)
