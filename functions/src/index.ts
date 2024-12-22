 function sum(x:number, y:number):number {
    return x+y;   
}

console.log(sum(3,5))

/// Default params
const greet = (greet:string ="Unkonwn") =>  `hello ${greet}`;
console.log(greet("john wick"))


////Never keyword

let pi : never;

function Err():never{
    throw new Error("This funciton will never return any value")
}
// const erMessage = err();  Cannot be called.

/////////// Read only , type , interface

type user = {
    readonly firstName : string,
    lastName : string,
    salary : number,
    isManager :boolean
}

interface Employee {
    firstName : string,
    lastName :string
}

const User:user ={
    firstName:"wick",
    lastName:"john",
    salary:291931,
    isManager:true
}

function printUser(user:user){
    console.log(user)
}

type name = string | number | boolean
let myName : name = "john"
myName = 33;
myName = true;


type myNewUser = Pick<user, 'firstName' | 'isManager'>

const john:myNewUser = {
    firstName:"john",
    isManager:true
}

type newEmployee = Partial<Employee>

const newEmp : newEmployee = {
    firstName:"john Doe"
}

////////// enums

enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
}

function printRole (role:Role):void{
    if(role == "Admin"){
        console.log("Admin has all the privilage")
    }
    if(role == "User"){
        console.log("Limited Access")
    }
    if(role == "Guest"){
        console.log("Read only access")
    }
}

console.log(Role.User)