// const bigObject = {
//        name: "Global Corp",
//        established: 1992,
//        isActive: true,
//        branches: [
//          {
//            city: "New York",
//            employees: [
//              { name: "Alice", position: "Manager", age: 35, isPermanent: true },
//              { name: "Bob", position: "Developer", age: 28, isPermanent: true },
//              { name: "Charlie", position: "Designer", age: 24, isPermanent: false }
//            ],
//            revenue: 1500000,
//            isProfitable: true
//          },
//          {
//            city: "London",
//            employees: [
//              { name: "David", position: "Manager", age: 42, isPermanent: true },
//              { name: "Emma", position: "Developer", age: 31, isPermanent: true },
//              { name: "Frank", position: "Designer", age: 29, isPermanent: false }      /* ////////////////////////////////////////////////// */
//            ],
//            revenue: 1250000,
//            isProfitable: false
//          },
//          {
//            city: "Tokyo",
//            employees: [
//              { name: "George", position: "Manager", age: 45, isPermanent: true },
//              { name: "Hana", position: "Developer", age: 34, isPermanent: true },
//              { name: "Ivy", position: "Designer", age: 27, isPermanent: false }
//            ],
//            revenue: 2000000,
//            isProfitable: true
//          }
//        ],
//        products: [
//          {
//            name: "Smartphone",
//            price: 799,
//            stock: 1500,
//            categories: ["Electronics", "Mobile", "Gadgets"],
//            ratings: {
//              average: 4.5,
//              reviews: [
//                { user: "JohnDoe123", rating: 5, comment: "Amazing phone!" },
//                { user: "JaneSmith456", rating: 4, comment: "Great value." }
//              ]
//            }
//          },
//          {
//            name: "Laptop",
//            price: 1200,
//            stock: 500,
//            categories: ["Electronics", "Computers", "Laptops"],
//            ratings: {
//              average: 4.7,
//              reviews: [
//                { user: "TechGuru99", rating: 5, comment: "Best laptop I've used!" },
//                { user: "LaptopLover", rating: 4.5, comment: "Solid performance." }
//              ]
//            }
//          }
//        ],
//        CEO: {
//          name: "Susan Clark",
//          age: 52,
//          experience: 25,
//          achievements: [
//            "Expanded company to 10 countries",
//            "Increased yearly revenue by 200%",
//            "Named 'CEO of the Year' in 2022"
//          ]
//        },
//        partners: [
//          { name: "Tech Solutions", partnershipYears: 10, isActive: true },
//          { name: "Design Masters", partnershipYears: 5, isActive: false }
//        ],
//        upcomingEvents: {
//          conferences: [
//            { name: "Tech Innovation Summit", date: "2024-03-10", location: "San Francisco" },
//            { name: "Global Design Expo", date: "2024-07-22", location: "Berlin" }
//          ],
//          webinars: [
//            { name: "AI in Business", date: "2024-05-15", platform: "Zoom" },
//            { name: "Future of Web Development", date: "2024-09-05", platform: "Microsoft Teams" }
//          ]
//        },
//        headquarters: {
//          address: {
//            street: "123 Innovation Drive",
//            city: "Silicon Valley",
//            state: "California",
//            postalCode: "94025",
//            country: "USA"
//          },
//          contact: {
//            phone: "+1 555-1234",
//            email: "contact@globalcorp.com"
//          }
//        }
//      };
// console.log(bigObject.branches[1].employees[2])
// const a = 56;
// const numbers = [56, 55, 25, 45];
// const person = {
//        name: "sakib Khan"
// }
// const massage = `Hi ${person.name} has a ${a} access to ${numbers[2]}`
// console.log(massage)
// const squre = x => x * 2;
// const result = squre(2)
// console.log(result)
// const {age, z, ...others} = {x: 2, y: 5, name: "ovijit", age: 55}
// const [first, second, ...remaining] = ["ram", "sam", "jodu", "Modu"]
// console.log(first, second, remaining)

// const data = [{id: 1, name: "abul", Address: "kochu Khet"}]
// console.log(data[0].Address)
// const data2 = {
//        count: 5000,
//        data: [
//               {id: 1, name: "Lenovo Laptop", price: 6500},
//               {id: 1, name: "Macbook", price: 16500},
//        ]
// }
// console.log(data2.data[1].price)
// const user = {
//        id: 50001,
//        name: "shoriful Raj",
//        address: {
//               street: {
//                      first: "54/1 uttor Side",
//                      second: "Porishod Er Goli",
//                      third: "no dorai"
//               },
//               city: "dhaka",
//        }
// }
// const user2 = {
//        id: 5002,
//        name: "pori bibir Majar",
//        address: {
//               city: "chittagong",
//               country: "bangladesh"
//        }
// }
// console.log(user.address.street?.second)

// const numbers = [4, 5, 6, 7, 8, 9, 10];
// const doubled = [];
// for(const number of numbers){
//        const double = number * 2;
//        doubled.push(double);
// }
// console.log(doubled)
// const result = numbers.map(num => num * 2);
// console.log(result)

// const numbers = [1, 3, 5, 7, 9, 11, 13];
// const result = numbers.map(num => num * 2)
// console.log(result)
// const players = [75, 54, 50, 55, 22, 39]
// const selected = players.filter(player => player % 2 === 0);
// const selected = players.find(player => player < 50)
// console.log(selected)

// const numbers = [4, 5, 6, 7, 8, 9, 10, 11];
// const total = numbers.reduce((previous, current) => previous + current,0)
// const sum = numbers.reduce((p,c) => p + c,0);
// console.log(sum)
// const products = [
//        {id: 1, name: "lenovo", price: 65000},
//        {id: 2, name: "dell", price: 45000},
//        {id: 3, name: "hp", price: 40000},
//        {id: 4, name: "macbook", price: 70000}
// ]
// const names = products.map(product => product.name);
// products.forEach(product => console.log(product.id))
// const affordable = products.filter(A => A.price < 50000)
// const expencive = products.find(A => A.price > 65000)
// console.log(expencive)

// const products = [
//        {id: 1, name: "lenovo", price: 65000},
//        {id: 2, name: "dell", price: 45000},
//        {id: 3, name: "hp", price: 40000},
//        {id: 4, name: "macbook", price: 70000}
// ]
// class product{
//        conntry = "bangladesh"
//        constructor(name){
//               this.name = name;
//        }
//        speak(talk){
//               console.log(`talking about ${talk}`)
//        }
// }
// const lenovo = new product("le le lenovo")
// console.log(lenovo);
// class teacher{
//        constructor(name, subject, age){
//               this.name = name;
//               this.subject = subject;
//               this.age = age;
//        }
//        lecture(){
//               console.log("SIR is teaching math")
//        }
// }
// const topon = new teacher("sofik", "math", 29);
// console.log(topon)

// class vehicle{
//        constructor(name, price){
//               this.name = name;
//               this.price = price;
//        }
//        move(){
//               console.log("gari cole na re")
//        }
// }
// class bus vehicle{
//        constructor(name, price, seat, ticketprice){
//               super(name, price);
//               this.seat = seat;
//               this.ticketprice = ticketprice;
//        }
// }

// const person = {
//        name: "kodom ali",
//        job: "badam Khai",
//        3: "third",
//        "add-dress": "kochu khet"
// }
// console.log(person.name)
// console.log(person[3])
// console.log(person["add-dress"])

// practice Problems

// const numbers = [1, 3, 5, 7, 9];
// let even = [];
// for(const number of numbers){
//        const evennumber = number + 1;
//        even.push(evennumber)
// }
// console.log(even)
// const evennumber = numbers.map(number => number + 1);
// console.log(evennumber)
// const numbers = [33, 50, 79,78, 90, 101, 30]
// const filterNumber = numbers.find(nmber => nmber % 10 === 0);
// console.log(filterNumber)

// const instructor = [
//        {name: "nodi", age: 28, position: "senior"},
//        {name: "akil", age: 26, position: "junior"},
//        {name: "shobuj", age: 30, position: "senior"},
// ]
// const instructorName = instructor.filter(name => name.position === "senior", console.log(instructor))
// console.log(instructorName)

const people = [
       {name: "Meena", age: 20},
       {name: "Rina", age: 15},
       {name: "Sunchona", age: 22},
]
let total = 0;
for(const name of people){
       const reserve = name.age;
       const toto = reserve + total;
       total = toto
}
console.log(total)