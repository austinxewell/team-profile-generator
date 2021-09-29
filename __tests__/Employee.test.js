const Employee = require('../lib/Employee');

const austin = {
    name: 'Austin',
    id: 1,
    email: "austin.ewell86@gmail.com"
}

test('creates employee object', () => {
    const employee = new Employee(austin);

    expect(employee).toEqual(expect.any(Object));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets name value', () => {
    const employee = new Employee(austin);

    expect(employee.getName()).toEqual(employee.name);
})

test('gets id value', () => {
    const employee = new Employee(austin);

    expect(employee.getId()).toEqual(employee.id);
})

test('gets email value', () => {
    const employee = new Employee(austin);

    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets role value', () => {
    const employee = new Employee(austin);

    expect(employee.getRole()).toEqual("Employee");
})