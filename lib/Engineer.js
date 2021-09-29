const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {       
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}

var Dave = new Engineer('Dave', 1, 'dave@gmail', 'davegithub')
// console.log(Dave)
// console.log(Dave.getRole())
// console.log(Dave.getEmail())
console.log(Dave.getGithub())

module.exports=Engineer