const Manager = require('../lib/Manager');
const manager = new Manager('Dave', 1, 'dave@gmail.com', 'davegithub');

test('creates intern object', () => {

    expect(manager).toEqual(expect.any(Object));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('gets name value', () => {

    expect(manager.getName()).toEqual('Dave');
})

test('gets id value', () => {

    expect(manager.getId()).toEqual(manager.id);
})

test('gets email value', () => {

    expect(manager.getEmail()).toEqual(manager.email);
})

test('gets github value', () => {

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
})

test('gets role value, overriden from employee', () => {

    expect(manager.getRole()).toEqual("Manager");
})