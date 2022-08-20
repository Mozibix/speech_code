// /*let firstName = "Hannah";
// let lastName = "Opus"
// let age = 13;
// const userDetails = `My name is
// ${firstName}
// ${lastName}
// and I am ${age} years old `;
// console.log(userDetails);*/

// // let person = {
// //     firstName: 'Hannah',
// //     lastName: 'Opus',
// //     age: 13,
// //     isMarried: false,

// //     homeAddress: {
// //         long: 110.22,
// //         lat: 20.5,
// //     },

// //     friends: ['divine', 'miracle', 'anasemi','princess'],

// // };

// // console.log(person);
// // console.log(person.firstName);
// // console.log(person.homeAddress.long);
// // console.log(person.friends[3]);

// // const price = 200;
// // console.log(price >= 200);
// // console.log(price !== 200);

// // let cost = 100;
// // console.log(cost > 10 || cost < 20)
// // console.log(cost !== 1000);

// // let a = 10;
// // let b = 20;
// // a = a ^ b;
// // b = a ^ b;
// // a = a ^ b;

// // console.log(a);
// // console.log(b);

// // let c = 20;
// // let d = 50;
// // let temp = c;
// // c = d;
// // d= temp;
// // console.log(c);
// // console.log(d);

// // let day;
// // switch (new Date().getDay()) {
// //   case 0:
// //     day = "Sunday";
// //     break;
// //   case 1:
// //     day = "Monday";
// //     break;
// //   case 2:
// //     day = "Tuesday";
// //     break;
// //   case 3:
// //     day = "Wednesday";
// //     break;
// //   case 4:
// //     day = "Thursday";
// //     break;
// //   case 5:
// //     day = "Friday";
// //     break;
// //   case  6:
// //     day = "Saturday";
// // }
// // console.log(day);

// //prrblm on how to declare this number anoda place
// /*let number;
// if(number % 3 === 0) {
//     console.log('Fizz');
// }
//  else if (number % 5 === 0) {
//     console.log('Buzz');
//  }else if (number % 3 === 0 && number % 5 === 0) {
//     console.log('FizzBuzz');
//  }else{
// console.log('Nothing');
// };
// */

// // let number = 71;
// // number % 5 === 0 && number % 3 === 0 ? console.log('FizzBuzz'):
// // number % 3 === 0 ? console.log('Fizz') :
// // number % 5 === 0 ? console.log ('Buzz') :
// // console.log('nothing');

// //Grading System

// // let number = 60;

// // if (number < 0 || number > 100) {
// //   console.log("Invalid Mark");
// // } else if ((number) >= 80 && number <= 100) {
// //   console.log("A+");
// // } else if ((number) >= 70 && number <= 80) {
// //   console.log("A");
// // } else if ((number) >= 60 && number <= 69) {
// //   console.log("A-");
// // } else if ((number) >= 50 && number <= 59) {
// //   console.log("B");
// // } else if ((number) >= 40 && number <= 49) {
// //   console.log("C");
// // } else if ((number) >= 33 && number <= 39) {
// //   console.log("D");
// // } else if ((number) >= 0 && number <= 32) {
// //   console.log("F");
// // }

// // let number = 100000;
// // ((number) >= 80 && number <= 100) ? console.log('A+') :
// // ((number) >= 70 && number <= 80) ? console.log('A') :
// // ((number) >= 60 && number <= 69) ? console.log('A-') :
// // ((number) >= 50 && number <= 59) ? console.log('B') :
// // ((number) >= 40 && number <= 69) ? console.log('C') :
// // ((number) >= 33 && number <= 39) ? console.log('D') :
// // ((number) >= 0 && number <= 32) ? console.log('F') :
// // console.log('Invalid Marks');

// // const objs = {
// //     name : 'Ariyan',
// //     age : 40,
// // }

// // for (let key in objs) {
// //     console.log(key,);
// // }

// // let numbers = [1,2,3,4,5];
// // console.log(numbers)

// // for (let hi in numbers){
// //     console.log(hi);
// // }

// // let message = 'Hi My name is Ariyan';
// // console.log(message);
// // console.log(message.charAt(8));
// // console.log(message.toUpperCase());
// // console.log(message.toLowerCase());
// // console.log(message.includes('Kazi'));
// // console.log(message.startsWith('Hirr'));
// // console.log(message.endsWith('Ariyan'));
// // console.log(message.split(' '));
// // console.log(message.slice(2, 7));
// // console.log(message.substring(2, 7));
// // console.log(message.substr(2, 9))

// // const multiply = (...args) => {
// //   console.log(args);

// //   let nums = 1;
// //   for (let multi of args) {
// //     nums *= multi;
// //   }
// //   return nums;
// // };

// // console.log(multiply(2, 3, 4, 5, 6, 13));

// // const number = (...arguments) => {
// //     console.log(arguments);

// //     let digits = 1;
// //      for (let values of arguments) {
// //         digits *= values;
// //      }
// //      return digits;
// // };
// // console.log(number(12,4, 6, 9));

// const user = {
//   name: "moses",
//   age: 90,
//   class: "jss2",
//   place: "ph",
// };

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const multi = numbers.map((num) => {
//   return num * 2;
// });
// console.log(multi);
// // for (let vee of numbers){
// //     multi.push(vee * 2)
// // };
// // console.log(multi);

// // numbers.splice(4,0,49,59);
// // console.log(numbers.includes(33));
// // console.log(numbers);

// // let doctors = [
// //     {name: 'vibes', age : 40},
// //     {name: 'peter', age: 300},
// // ];console.log(doctors);
// // doctors.sort((t1,t2)=> {
// //     if (t1.age > t2.age) return +1;
// //     if (t1.age === t2.age) return 0;
// //     if (t1.age < t2.age) return -1;
// // } ).sort();
// // console.log(doctors);

// let doctors = [
//   { name: "vibes", age: 40 },
//   { name: "peter", age: 300 },
// ];
// const docName = doctors.map((doc) => doc.name);
// console.log(docName);

// let figures = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddNumbers = [];

// for (let odd of figures) {
//   if (odd % 2 === 1) {
//     oddNumbers.push(odd);
//   }
// }
// console.log(oddNumbers);

// const evenNumbers = figures.filter((even) => {
//   return even % 2 !== 1;
// });
// console.log(evenNumbers);

// const [a,b,c] = [10,20,30];
// console.log(a);
// // const reduceSum = fig.reduce((sum,add)=>{
// //     return sum - add ;
// // },10);
// // console.log(reduceSum);

// const admins = {
//   name: "moses",
//   age: 90,
//  yr: "jss2",
//   place: "ph",
//   address: {
//     add1: 'gate',
//     add2: 'city',
//   },
// };

// const {name,age,yr,place,address} = admins;
// console.log(`${name, address.add1}`);

//   const map = new Map();
//   map.set('name', 'opus');
//   console.log(map.keys() );

//Asynchronous Programing

// console.log("Before");

// setTimeout(() => {
//   alert("HI");
// }, 2000);
// console.log("After");

// const fetchUser = () => {
//   setTimeout(() => {
//     console.log("Hello API");
//     return {
//       name: "Ariyan",
//       age: 67,
//     };
//   }, 2000);
// };

// const user = fetchUser();
// console.log(user);

// const fetchUser = (userId, callback) => {
//   setTimeout(() => {
//     console.log("Hello am learning API");
//     const fetchData = {
//       id: userId,
//       name: "Moses",
//       email: "opuzmoses@gmail.com",
//     };
//     callback(fetchData);
//   }, 2000);
// };

// const sendMail = (callback) => {
//   setTimeout(() => {
//     console.log("sending Message");
//     const response = { sucess: true };
//     callback(response);
//   }, 3000);
// };

// fetchUser(12345, (user) => {
//   console.log(`${user.name}`);

//   sendMail((response) => {
//     console.log(`${response.sucess}`);
//   });
// });

// const pro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("successfull");
//     reject(new Error("Error"));
//   }, 2000);
// });

// console.log(pro);

// pro
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("help api");
//     reject(new Error("omo i tire"));
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("help api abeg");
//     reject(new Error("omo i tire aswr"));
//   }, 2000);
// });

// Promise.all([promise1, promise2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//API API API

// const gitAPI = fetch("https://api.github.com/users/andrew");
// gitAPI
//   .then((res) => {
//     return res.json();
//   })
//   .then((profile) => {
//     console.log(profile);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(gitAPI);

// const getInfoFromGit = async () => {
//   const res = await fetch("https://api.github.com/users/andrew");
//   const profile = await res.json();
//   console.log(profile);
// };

// getInfoFromGit();

// const info = async () => {
//   const getAPI = await fetch("http://localhost:3000/Posts");
//   const response = await getAPI.json();
//   console.log(response);
//   console.log(response[0].id);
// };
// info();

// // FACTORY FUNCTION
// const user = (name, age) => {
//   const userObj = {
//     name,
//     age,
//     walk: () => {
//       console.log("function of anoda function");
//     },
//   };
//   return userObj;
// };

// let user1 = user("opuz", 50);
// console.log(user1);

// const regExp = /moses/gi;
// // console.log(regExp.test("Moses"));
// // console.log(regExp.source.toUpperCase());
// // console.log(regExp.exec("hello am MoseS"));

// const str = "hello my name is moses moses moses";
// console.log(str.match(regExp));
// console.log(str.search(regExp));
// console.log(str.replace(regExp, "dark_9t"));

// let text = "life hard";
// let utterance = new SpeechSynthesisUtterance(text);
// document.onclick = () => {
//   speechSynthesis.speak(utterance);
// };

let optionForAge = "";
for (let i = 0; i <= 100; i++) optionForAge += `<option>${i} </option>`;
document.querySelector("[name=age]").innerHTML = optionForAge;

console.log("hello");
