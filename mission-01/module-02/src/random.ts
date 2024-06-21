const addNumber = (a:number, b:number = 10)=>{
    return a + b
}

console.log(addNumber(40))

//spread oparator

const oldFriends = ['Rasel', "Reza", "Ram"]
const newFriends = ['Raju', 'sabbir']

oldFriends.push(...newFriends)
console.log(oldFriends)

//rest parameter


//functions and reduce use

function sumArr(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArr(1, 2, 3)); // 6
console.log(sumArr(10, 20, 30, 40)); // 100


//rest parameter, spread oparator -> similar in looking but use case and purpose different, rest basically use in function to pass 
//multiple value and esily we can destructure the value from the rest parameter, on the on hands, spread oparator is use to copy
//array or object and it can create new array without mutating the primary one. 

type User = {
    name: string,
    srial: number,
    isAdmin?: boolean
}

const user1: User = {name: 'Rahim', srial: 1004}
const user2: User = {name: 'Karim', srial: 1005, isAdmin: true}

console.log(user1.name)