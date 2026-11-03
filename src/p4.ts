// let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"]
// let numbers: number[] = [1, 2, 3, 4, 5]
// let status: boolean[] = [true, false, true, false]
// fruits.push("Grapes")
// let numbers2: Array<number> = [1, 2, 3, 4, 5]
// let data: (string | number | boolean)[] = ["Umayer", 21, true, "Hello", 22.3456]
// fruits.push("Grapes")
// fruits.pop()
// fruits.unshift("Grapes")
// fruits.shift()
// console.log(fruits)

// let result = numbers.map((num) => num * 2)
// let result = numbers.filter((num) => num >= 2)
// console.log(result)


// let user: [string, number, boolean] = ["Umayer", 21, true]

// let user: [string, number?] = ["Umayer"]
// console.log(user)

// let numbers: readonly number[] = [1, 2, 3, 4, 5]
// numbers.push(6) 
// numbers[0] = 10
// console.log(numbers)

// let fruits: ReadonlyArray<string> = ["Apple", "Banana", "Mango", "Orange"]
// // fruits.push("Grapes")
// console.log(fruits)


let employees: {
  id: number;
  name: string;
  salary: number;
}[] = [
  {
    id: 1,
    name: "Rahim",
    salary: 30000
  },
  {
    id: 2,
    name: "Karim",
    salary: 40000
  }
];