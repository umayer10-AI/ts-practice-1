// let user: {
//   name: string;
//   age: number;
// } = {
//   name: "Rahim",
//   age: 25
// };
// console.log(user);
const employees = [
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
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);
export {};
