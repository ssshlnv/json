// 1.1
// const player = document.getElementById('player');
// let playerBottom = 0;
// let playerLeft = 0;
// let score = 0;

// const coins = document.querySelectorAll('.coin');

// function checkCollision(player, coin) {
//     const playerRect = player.getBoundingClientRect();
//     const coinRect = coin.getBoundingClientRect();

//     return (
//         playerRect.bottom >= coinRect.top &&
//         playerRect.top <= coinRect.bottom &&
//         playerRect.right >= coinRect.left &&
//         playerRect.left <= coinRect.right
//     );
// }

// function collectCoin(coin) {
//     coin.style.display = 'none';
//     score++;
//     document.getElementById('scoreValue').innerText = score;
// }

// function checkForCoins() {
//     coins.forEach((coin) => {
//         if (checkCollision(player, coin)) {
//             collectCoin(coin);
//         }
//     });
// }

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         playerLeft += 10;
//         player.style.left = playerLeft + 'px';
//         checkForCoins();
//     } else if (event.key === 'ArrowLeft') {
//         playerLeft -= 10;
//         player.style.left = playerLeft + 'px';
//         checkForCoins();
//     } else if (event.key === 'ArrowUp') {
//         playerBottom += 10;
//         player.style.bottom = playerBottom + 'px';
//         checkForCoins();
//     } else if (event.key === 'ArrowDown') {
//         playerBottom -= 10;
//         player.style.bottom = playerBottom + 'px';
//         checkForCoins();
//     }
// });

// 1.2
// let arr = [1, 2, 3, 'a', 'b', 'c'];
// let jsonString = '[';

// for (let i = 0; i < arr.length; i++) {
//     if (i !== 0) {
//         jsonString += ', ';
//     }

//     if (typeof arr[i] === 'number') {
//         jsonString += arr[i];
//     } else {
//         jsonString += "${arr[i]}";
//     }
// }

// jsonString += ']';

// console.log(jsonString);

// 1.3
// let obj = {
//     a: 1,
//     b: 2,
//     c: 'eee',
//     d: true,
// };

// let jsonString = '{';

// let keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//     if (i !== 0) {
//         jsonString += ', ';
//     }

//     let key = keys[i];
//     let value = obj[key];

//     if (typeof value === 'number' || typeof value === 'boolean') {
//         jsonString += "${key}": ${value};
//     } else {
//         jsonString += "${key}": "${value}";
//     }
// }

// jsonString += '}';

// console.log(jsonString);

// 2.1
// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);

// let sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log('Массив:', arr);
// console.log('Сумма чисел массива:', sum);

// 2.2
// let json = {
//     "data1": [1,2,3],
//     "data2": [4,5,6],
//     "data3": [7,8,9]
//    };
   
//    let obj = JSON.parse(json);
//    let sum = 0;
   
//    for (let key in obj) {
//      sum += obj[key].reduce((acc, curr) => acc + curr, 0);
//    }
   
//    console.log('Сумма чисел из представленных данных:', sum);

// 2.3
// let json = '["user1","user2","user3","user4","user5"]';
// let users = JSON.parse(json);

// let ul = document.createElement('ul');

// users.forEach(user => {
//   let li = document.createElement('li');
//   li.textContent = user;
//   ul.appendChild(li);
// });

// document.body.appendChild(ul);

// 2.4
// let json = [
//     { 
//      "name": "user1", 
//      "age": 25, 
//      "salary": 1000 
//     },
//     { 
//      "name": "user2", 
//      "age": 26, 
//      "salary": 2000 
//     },
//     { 
//      "name": "user3", 
//      "age": 27, 
//      "salary": 3000 
//     }
//    ];
   
//    let employees = JSON.parse(json);
   
//    let table = document.createElement('table');
//    let headerRow = table.insertRow();
//    Object.keys(employees[0]).forEach(key => {
//      let headerCell = document.createElement('th');
//      headerCell.textContent = key;
//      headerRow.appendChild(headerCell);
//    });
   
//    employees.forEach(employee => {
//      let row = table.insertRow();
//      Object.values(employee).forEach(value => {
//        let cell = row.insertCell();
//        cell.textContent = value;
//      });
//    });
   
//    document.body.appendChild(table);
   
// 3.1
// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let jsonString = JSON.stringify(json);

// console.log(jsonString);

// 3.2
// const citiesList = document.querySelectorAll('ul li');

// let cities = [];

// citiesList.forEach(city => {
//     cities.push(city.textContent);
// });

// let citiesJson = JSON.stringify(cities);

// console.log(citiesJson);

// 3.3
// const rows = document.querySelectorAll('table tr:not(:first-child)');

// let people = [];

// rows.forEach(row => {
//     const cells = row.querySelectorAll('td');
//     let person = {
//         surname: cells[0].textContent,
//         name: cells[1].textContent,
//         patronymic: cells[2].textContent
//     };
//     people.push(person);
// });


// let peopleJson = JSON.stringify(people);

// console.log(peopleJson);

// 4.1
// let json = '["user1","user2","user3","user4","user5"]';

// let users = JSON.parse(json);

// users.push("user6");

// let updatedJson = JSON.stringify(users);

// console.log(updatedJson);

// 4.2
// let json = '["user1","user2","user3","user4","user5"]';

// let users = JSON.parse(json);

// users[1] = "newUserName";

// let updatedJson = JSON.stringify(users);

// console.log(updatedJson);

// 4.3
// let json = [ 
//     { 
//      "name": "user1", 
//      "age": 25, 
//      "salary": 1000 
//     }, 
//     { 
//      "name": "user2", 
//      "age": 26, 
//      "salary": 2000 
//     }, 
//     { 
//      "name": "user3", 
//      "age": 27, 
//      "salary": 3000 
//     } 
//    ];
   
//    let employees = JSON.parse(json);
   
//    let newEmployee = {
//        "name": "user4",
//        "age": 28,
//        "salary": 4000
//    };
//    employees.push(newEmployee);
   
//    let updatedJson = JSON.stringify(employees);
   
//    console.log(updatedJson);
   