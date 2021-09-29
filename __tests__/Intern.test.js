const Intern = require('../lib/Intern');

const austin = {
    name: 'Austin',
    id: 4,
    email: "austin.ewell86@gmail.com",
    school: "UofU"
}

test('creates intern object', () => {
    const intern = new Intern(austin);

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets name value', () => {
    const intern = new Intern(austin);

    expect(intern.getName()).toEqual(intern.name);
})

test('gets id value', () => {
    const intern = new Intern(austin);

    expect(intern.getId()).toEqual(intern.id);
})

test('gets email value', () => {
    const intern = new Intern(austin);

    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets school value', () => {
    const intern = new Intern(austin);

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets role value, overriden from employee', () => {
    const intern = new Intern(austin);

    expect(intern.getRole()).toEqual("Intern");
})