// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };

// type A = {
//   num: number;
// };

// const employee1: Employee = {
//   id: 1,
//   name: "Rahim",
//   salary: 30000,
// };

// const employee2: Employee & A = {
//   id: 2,
//   name: "Karim",
//   salary: 40000,
//   num: 10,
// };

// interface ID {
//     userID: number | string;
// }

// interface Person {
//   name: string;
//   age: number;
// }
// interface Employee3 extends Person {
//   salary: number;
//   department: string;
// }
// const a : Employee3 = {
//   name: "Rahim",
//   age: 25,
//   salary: 30000,
//   department: "IT"
// };


// interface Person {
//   name: string;
//   age: number;
// }

// interface Contact {
//   email: string;
//   phone: string;
// }

// interface Employee extends Person, Contact {
//   salary: number;
// }

// const employee: Employee = {
//   name: "Rahim",
//   age: 25,
//   email: "rahim@example.com",
//   phone: "01712345678",
//   salary: 30000,
// };

// interface Employee {
//   name: string;
//   age: number;
//   salary: number;
// }

// type UpdateEmployee = Partial<Employee>;
// type a = Pick<Employee, "name">;
// type b = Omit<Employee, "name">;

// const update: UpdateEmployee = {
//   salary: 45000,
//   age: 30
// };

// const aa: a = {
//   name: "Karim"
// };

// const bb: b = {
//     age: 22,
//     salary: 40000
// };

interface Employee {
  id: number;
  name: string;
}

type ReadonlyEmployee = Readonly<Employee>;

const employee: ReadonlyEmployee = {
  id: 1,
  name: "Rahim",
};

// employee.name = "Karim";