// class Counter {
//   count = 0;
//   increase = () => {
//     this.count++;
//   };
// }

// const counter = new Counter();
// const increaseFn = counter.increase;

// increaseFn();
// counter.increase()

// console.log(counter.count);


// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<string>("Hello"))

type Employee = {
  id: number;
  name: string;
  salary: number;
};

type EmployeeKeys = keyof Employee;
// console.log("name" in Employee)