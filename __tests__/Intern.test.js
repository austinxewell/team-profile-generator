const Intern = require('../lib/Intern');
const intern = new Intern('Dave', 1, 'dave@gmail.com', 'davegithub');

test('creates intern object', () => {

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets name value', () => {

    expect(intern.getName()).toEqual('Dave');
})

test('gets id value', () => {

    expect(intern.getId()).toEqual(intern.id);
})

test('gets email value', () => {

    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets github value', () => {

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets role value, overriden from employee', () => {

    expect(intern.getRole()).toEqual("Intern");
})