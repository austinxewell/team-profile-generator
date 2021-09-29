const Employee = require('../lib/Employee');

const employee = new Employee('Dave', 1, 'dave@gmail', 'davegithub');



test('gets name value', () => {
    expect(employee.getName()).toEqual(employee.name);
})

test('gets id value', () => {
    expect(employee.getId()).toEqual(employee.id);
})

test('gets email value', () => {
    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets role value', () => {
    expect(employee.getRole()).toEqual("Employee");
})