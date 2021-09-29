const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'davegithub');



test('creates engineer object', () => {

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets name value', () => {

    expect(engineer.getName()).toEqual('Dave');
})

test('gets id value', () => {

    expect(engineer.getId()).toEqual(engineer.id);
})

test('gets email value', () => {

    expect(engineer.getEmail()).toEqual(engineer.email);
})

test('gets github value', () => {

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('gets role value, overriden from employee', () => {

    expect(engineer.getRole()).toEqual("Engineer");
})