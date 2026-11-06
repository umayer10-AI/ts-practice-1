// class A {
//     constructor(public name: string, public age: number){}
//     fun() {
//         return `${this.name}`
//     }
//     get gun() {
//         return `${this.name}`
//     }
//     set nun(name: string) {
//         console.log(`${this.name} ${name}`)
//     }
// }
// const a = new A("Umayer", 21)
// console.log(a)
// console.log(a.fun())
// console.log(a.gun)
// a.nun="Ahmad"
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getSalary() {
        return this.salary;
    }
    getDepartment() {
        return this.department;
    }
}
class A extends Employee {
    age;
    constructor(name, salary, department, age) {
        super(name, salary, department);
        this.age = age;
    }
    getShow() {
        return `Age is Private ${this.department}`;
    }
}
const emp = new Employee("Rahim", 30000, "IT");
const a = new A("Umayer", 40000, "Software", 21);
console.log(emp.name);
console.log(emp.getSalary());
console.log(emp.getDepartment());
console.log(a.name);
console.log(a.getShow());
export {};
