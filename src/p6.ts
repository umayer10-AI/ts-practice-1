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

// interface Employee {
//   id: number;
//   name: string;
// }

// type ReadonlyEmployee = Readonly<Employee>;

// const employee: ReadonlyEmployee = {
//   id: 1,
//   name: "Rahim",
// };

// employee.name = "Karim";


//1

// interface Person {
//     name: string;
//     age: number;
// }
// interface Student extends Person {
//     rollNumber: number;
// }

// const student: Student = {
//     name: "Rahim",
//     age: 20,
//     rollNumber: 101
// };


//2

// type Product = {
//     id: number;
//     name: string;
//     price: number;
// };

// // type Stock = {
// //     quantity: number;
// // };
// type Stock = Product & {
//     quantity: number;
// };

// // type Inventory = Product & Stock;

// const inventoryItem: Stock = {
//     id: 1,
//     name: "Laptop",
//     price: 1000,
//     quantity: 50
// };


//3


// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// type SafeUser = Omit<User, 'password'>;
// type UpdateUser = Partial<Omit<User, 'id'>>;

// const user: SafeUser = {
//     id: 1,
//     name: "Rahim",
//     email: "rahim@example.com"
// };

// const updateUser: UpdateUser = {
//     name: "Karim",
//     email: "karim@example.com",
// };  


// type User = {
//   name?: string;
//   email?: string;
//   age?: number;
// };

// type FullUser = Required<User>;

// const user1: FullUser = {
//   name: "Karim",
//   email: "karim@gmail.com",
//   age: 25
// };

type Employee = {
  id: number;
  name?: string;
  salary?: number;
  address?: string;
};

type UpdatedEmployee =
  Required<Pick<Employee, "name" | "salary">> &
  Omit<Employee, "name" | "salary">;

const a : UpdatedEmployee = {
  id: 1,
  name: "Rahim",
  salary: 30000
};