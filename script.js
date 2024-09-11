// Module Introduction and Basic ES6 Recap



/* 
1.Var, Let, Const, 
2.Default Peramiter
3.Templete String
4.Arrow Function
5.Distructuring And Spread Operatior
6.Object.keys, Object.Values, Object.entries
7.For of Used In Array And String
8.for in loop Used In Object
*/

// const a = 56;
// const numbers = [56,7,8];
// const person = {
//        name: "sakib Khan"
// }
// const massage = `Hi, ${person.name} has a ${a} access To ${numbers[1]}`
// // console.log(massage)
// const squre = x => x * x;
// const sum = (a,b) = > a + b;
// connst {age, z, ...others} = {x: 2, Y: 5, z: 3, name: "ovijeet", age: 55}
// const [first, second, ...remaining] = ["ram", "sam", "Jodu", "modu"]




// Access Value, nested object, Optional chaining




const data = [{id: 1, name: "abul", Address: "kochu Khet"}]
// console.log(data[0].Address)
const data2 = {
       count: 5000,
       data: [
              {id: 1, name: "Lenovo Laptop", price: 6500},
              {id: 1, name: "Macbook", price: 16500},
       ]
}
// console.log(data2.data[1].price)
const user = {
       id: 50001,
       name: "shoriful Raj",
       address: {
              street: {
                     first: "54/1 uttor Side",
                     second: "Porishod Er Goli",
                     third: "no dorai"
              },
              city: "dhaka",
       }
}
const user2 = {
       id: 5002,
       name: "pori bibir Majar",
       address: {
              city: "chittagong",
              country: "bangladesh"
       }
}
// console.log(user.address.street?.second)
// console.log(user2.address.street?.second)



// Array map to do one line loop magic




// const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for(const num of numbers){
//        const double = num * 2;
//        doubled.push(double)
// }
// console.log(doubled)
// const numbers = [4, 5, 2, 8, 10];
// function doubleit(num){
//        return num * 2;
// }
// const result = numbers.map(doubleit) /* (.map) এটা এ্যারে এর উপরে কাজ করে এবং এটি এ্যারের প্রতিটা এলিমেন্ট কে ধরে ধরে কাজ করে।এবং এটি রিটার্ন করতে পারে। */
// console.log(result)
// const double2 = x => x*2;
// const output = numbers.map(n => n*2);
// console.log(output)
// const numbers = [12, 15, 8, 55, 25, 11]
// const output = numbers.map(x => x+3);
// console.log(output)
// const friends = ["tom", "jerry", "john", "mokbul"]
// const surname = friends.map(x => x.length + " hasan");
// console.log(surname)



// foreach, filter, find, and differences between them



// const numbers = [1, 3, 5, 7, 9, 11, 13];
// const result = numbers.forEach(n => console.log(n))  /* (forEach) এটা এ্যারে এর উপরে কাজ করে এবং এটি এ্যারের প্রতিটা এলিমেন্ট কে ধরে ধরে কাজ করে।এবং এটি রিটার্ন করতে পারে না। */
// console.log(result)
// const numbers = [1, 3, 5, 7, 9, 11, 13];
// const players = [75, 54, 50, 55, 22, 39]
// const selected = players.filter(p => p > 60); /* (.filter) এটি ব্যাবহার করা হয়য় কোন এ্যারে থেকে কিছু এলিমেন্ট কে কোন শর্ত এর মাধ্যমে বাছাই করা। */
// const selected = players.filter(p => p % 2 === 0);
// console.log(selected)
// const players = [75, 54, 50, 55, 22, 39]
// const selected = players.find(player => player > 30); /* (.find) এটি ব্যাবহার করা হয় কোন এ্যারে থেকে কোন শর্ত এর প্রথম এলিমেন্ট টাকে দিবে।যদি একই শর্ত অনেকগুলা এলিমেন্ট পূরণ করে তাহলেও শুধু প্রথম এলিমেন্ট টাকেই দিবে। */
// // console.log(selected)



// (Recap) Map, forEach, filter, find, reduce




// const numbers = [4, 5, 6, 7, 8, 9, 10, 11];
// const total = numbers.reduce( (previous, current) => previous + current, 0) /* (.reduce) এখানে এ্যারে এর প্রতিটা মানকেই একসাথে ধরবে। */
// console.log(total)
// const sum = numbers.reduce((p,c) => p + c,0);
// console.log(sum)
// const products = [
//        {id: 1, name: "lenovo", price: 65000},
//        {id: 2, name: "dell", price: 45000},
//        {id: 3, name: "hp", price: 40000},
//        {id: 4, name: "macbook", price: 70000}
// ]
// const names = products.map(product => product.name)
// products.forEach(p => console.log(p.id))
// const expencive = products.filter(product => product.price > 50000)
// const affordable = products.find(product => product.price < 50000)
// const total = products.reduce((acum, current) => acum + current.price, 0)
// console.log(total)




// (optional) Introduction to Class and objects




// const products = [
//        {id: 1, name: "lenovo", price: 65000},
//        {id: 2, name: "dell", price: 45000},
//        {id: 3, name: "hp", price: 40000},
//        {id: 4, name: "macbook", price: 70000}
// ]
// class Product{
//        country = "Bangladesh";
//        constructor(name){
//               this.name = name;
//        }
//        speak(talk){
//               console.log(`talking about ${talk}`)
//        }
// }
// const lenovo = new Product("le le Lenovo")
// console.log(lenovo)
// lenovo.speak("oba kita kow")
// class teacher{
       // constructor(name, subject, age){
              // this.name = name;
              // this.subject = subject
              // this.age = age
       // }
       // lecture(){
              // console.log("sir is teaching Math")
       // }
// }
// const tapan = new teacher("sahajahan Topon", "physics", 29);
// tapan.lecture()
// console.log(tapan)




// (optional) Inheritance prototypical inheritance



// class vehicle{
//        constructor(name, price){
//               this.name = name;
//               this.price = price;
//        }
//        move(){
//               console.log("gari chole na re")
//        }
// }
// class Bus extends vehicle{
//        constructor(name, price, seat, ticketprice){
//               super(name, price);
//               this.seat = seat;
//               this.ticketprice = ticketprice
//        }
// }
// class Truck extends vehicle{
//        constructor(name, price, load){
//               super(name, price);
//               this.load = load;
//        }
// }





// (advanced) this keyword, Dot notation vs bracket notation




// class person{
//        constructor(name, age){
//               this.name = name;
//               this.age = age;
//        }
//        sleep(){
//               console.log(`Sleeping Now ${this.name}`)
//        }
//        activity(){
//               this.sleep
//        }
// }
// const kodom = new person("rohim", 18);
// console.log(kodom)
// kodom.sleep();
// const baddam = new person("kacha badam", 23);
// baddam.sleep();
const person = {
       name: "kodom ali",
       job: "badam Khai",
       3: "third",
       "add-dress": "kochu khet"
}
const prop = "job"
console.log(person.job)
console.log(person["3"])
console.log(person["add-dress"])
console.log(person["job"])
console.log(person[prop])