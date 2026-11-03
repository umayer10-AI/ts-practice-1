// let user: {
//   name: string;
//   age: number;
// } = {
//   name: "Rahim",
//   age: 25
// };
// console.log(user);

// let user: {
//   name: string;
//   phone?: string;
// } = {
//   name: "Rahim"
// };

// console.log(user.phone?.toUpperCase());


// let employees: {
//   id: number;
//   name: string;
//   salary: number;
// }[] = [
//   {
//     id: 1,
//     name: "Rahim",
//     salary: 30000
//   },
//   {
//     id: 2,
//     name: "Karim",
//     salary: 40000
//   }
// ];
// console.log(employees);
// employees.forEach((employee) => {
//   console.log(employee.name);
// });

// for(let x in employees) {
//   console.log(employees[x].name);
// }

// const names = employees.map((employee) => employee.name);
// console.log(names);


// type Employee = {
//   readonly id: number;
//   name: string;
//   salary: number;
//   phone?: string;
// };

// const emp1: Employee = {
//   id: 1,
//   name: "Rahim",
//   salary: 30000
// };

// const emp2: Employee = {
//   id: 2,
//   name: "Karim",
//   salary: 40000,
//   phone: "01712345678"
// };


// const employee = {
//   name: "Rahim",
//   age: 25,
//   salary: 30000
// };
// const {name, age} = employee;
// console.log(name, age);


// type User = {
//   name: string;
//   age: number;
// };

// const showUser = (user: User) => {
//     const {name, age} = user;
//   console.log(name, age);
// }

// showUser({name: "Umayer", age: 21});


type Employee = {
  readonly id: number;
  name: string;
  salary: number;
  isActive: boolean;
  phone?: string;
  address: {
    city: string;
    country: string;
  };
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Rahim",
    salary: 30000,
    isActive: true,
    address: {
      city: "Dhaka",
      country: "Bangladesh"
    }
  },
  {
    id: 2,
    name: "Karim",
    salary: 40000,
    isActive: true,
    phone: "01712345678",
    address: {
      city: "Khulna",
      country: "Bangladesh"
    }
  },
  {
    id: 3,
    name: "Hasan",
    salary: 35000,
    isActive: false,
    address: {
      city: "Sylhet",
      country: "Bangladesh"
    }
  }
];

const activeEmployees = employees.filter((a) => a?.isActive);

// console.log(activeEmployees);

const totalSalary = employees.reduce((total, employee) => total + employee.salary,0);

console.log("Total Salary:", totalSalary);