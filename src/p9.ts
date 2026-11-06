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

  constructor(
    public name: string,
    private salary: number,
    protected department: string
  ) {}

  getSalary() {
    return this.salary;
  }
  getDepartment() {
    return this.department;
  }
}

class A extends Employee {
    constructor(name: string, salary: number, department: string, private age: number){
        super(name,salary,department)
    }

    getShow(){
        return `Age is Private ${this.department}`
    }
}

const emp = new Employee("Rahim",30000,"IT");
const a = new A("Umayer",40000,"Software",21);

console.log(emp.name);
console.log(emp.getSalary());
console.log(emp.getDepartment());
console.log(a.name);
console.log(a.getShow());
