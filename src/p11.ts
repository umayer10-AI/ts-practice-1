//1

// const filterEvenNumbers = (even: number[]) => {
//     const m = even.filter(v => v%2 === 0)
//     return m
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


//2

// const reverseString = (s: string): string => {
//     return s.split("").reverse().join('')
// }
// console.log(reverseString("typescript"))


//3


// type checkType = string | number

// const StringOrNumber = (s: checkType) => {
//     if(typeof s==="string")
//         return '"String"'
//     if(typeof s==="number")
//         return '"Number"'
// }
// console.log(StringOrNumber("Hello"))
// console.log(StringOrNumber(100))


//4

// function getProperty<T extends object, K extends keyof T>(
//   obj: T,
//   key: K
// ): T[K] {
//   return obj[key];
// }

// const user = {
//   id: 1,
//   name: "John Doe",
//   age: 21
// };

// console.log(getProperty(user, "name"));


//5

// type book = {
//     title: string, author: string, publishedYear: number
// }

// const toggleReadStatus = (myBook: book) => {

//     const {title, author, publishedYear}= myBook

//     return {
//         title: myBook.title,
//         author: myBook.author,
//         publishedYear: myBook.publishedYear,
//         isRead: true
//     }
// }

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook))


//6

// class Person {
//     constructor(public name: string, public age: number){}

//     getDetails (){
//         console.log(`"Name: ${this.name}, Age: ${this.age}"`)
//     }
// }

// class Student extends Person {
//     constructor(name: string, age: number, public grade: string){
//         super(name,age)
//     }

//     override getDetails(){
//         console.log(`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`)
//     }
// }

// const student = new Student("Alice", 20, "A");
// student.getDetails();


//7


const getIntersection = (a: number[], b: number[]): number[] => {
    return a.filter(v => b.includes(v))
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))