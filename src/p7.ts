// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }

// function printValue(value: unknown): void {

//   if (isString(value)) {
//     console.log(value.toUpperCase());
//   } else {
//     console.log("Not a string");
//   }
// }

// printValue("hello");
// printValue(100);


// function calculate(value: string | number) {
//   if (typeof value === 'number') {
//     return value * 3;
//   }
//   return value.toUpperCase();
// }
// console.log(calculate(10));


// type A = { name: string; salary: number };
// type B = { name: string; teamSize: number };
// function check(user: A | B) {
//   if ('salary' in user) {
//     return user.salary;
//   }
//   return user.teamSize;
// }
// console.log(check({ name: 'Rahim', teamSize: 5 }));


type Success = { status: 'success'; data: string };
type ErrorResult = { status: 'error'; message: string };
type Result = Success | ErrorResult;
function show(result: Result) {
  if (result.status === 'success') {
    return result.data;
  }
  return result.message;
}
console.log(show({ status: 'success', data: 'Done!' }));