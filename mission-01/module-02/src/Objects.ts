// object decleared and literal

// interface Person{
//     name: string,
//     age: number,
//     phone: number,
//     address: string
// }

// const person:Person = {
//     name: "Isham",
//     age: 20,
//     phone: 1234455,
//     address: "DHaka"
// }


// console.log(person.address)

//string literal
// type Direction = "North" | "South" | "East";

// let direction: Direction;

// direction = "East";
// console.log(direction)

// interface Car{
//     carName: string,
//     carModal: string,
//     price: number,
//     year?: number,

// }

// const car: Car = {
//     carName: 'Toyta',
//     carModal: "2-x-serize",
//     price: 200000000000,

// }
// console.log(car.carName)

//combain example

interface Products{
    name: string,
    price: number,
    category?: "Electronic" | "Cloths" | "Beautify",
    discount?: number
}


const product1: Products = {
    name: "Boys T-shirt",
    price: 200,
    category: "Cloths"
}


const product2: Products = {
    name: "Watch",
    price: 500,
    category: 'Electronic',
    discount: 100
}

console.log(product1.price)
console.log(product2.category)