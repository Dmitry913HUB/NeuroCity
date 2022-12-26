const {triangleSquare} = require('./js/square.js');
const {circleSquare} = require('./js/square.js');
// "main": "app.js",
//  "type": "module",

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

//функция для форматирования номера телефона
function phoneNumber(number){
    //задаю регулярное выраженеи для номера телефона
    const regex = /^\d{10}$/g;
    //записываю массив цифр которые подходят правилу
    const found = number.match(regex);
    //проверяю на пустоту массива
    if(found){
        return `Phone number: 8 (${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}-${number[8]}${number[9]}`
    }
    else{
        return `You are not entering a phone number`
    }
}
//функция для форматирования номера карты
function cardNumber(number){
    //задаю регулярное выраженеи для номера карты
    const regex = /^\d{16}$/g;
    //записываю массив цифр которые подходят правилу
    const found = number.match(regex);
    //проверяю на пустоту массива
    if(found){
        return `Card number: ${number[0]}${number[1]}${number[2]}${number[3]} ${number[4]}${number[5]}${number[6]}${number[7]} ${number[8]}${number[9]}${number[10]}${number[11]} ${number[12]}${number[13]}${number[14]}${number[15]}`
    }
    else{
        return `You are not entering a card number`
    }
}
//вызов и проверка 1 и 5 задания
// readline.question(`Enter the string `, (number) => {  
//     readline.close();
//     console.log(phoneNumber(number))
//     // console.log(cardNumber(number))
//   })

//функция для поиска чисел в строке
function numberInString(n, string) {
    //задаю регулярное выраженеи для чисел
    const regex = /\d+/g;
    //записываю массив чисел которые подходят правилу
    const found = string.match(regex);
    //сортирую полученный массив чисел по убыванию
    found.sort((a, b) => b - a);
    //вывожу масиив чисел
    for (let i = 0; (i < found.length)&&(i < n); i++){
        process.stdout.write(found[i]+" ");
    }
}
//вызов проверки 2 залания
// readline.question(`Enter the n: `, (n) => {
//     readline.question(`Enter the string: `, (string) => {
//     readline.close();
//     // var n = 10;
//     // var string = "asdas dasd asdasd asd 1 2 3 4 45 4534 234 23424 234 324 234 24 ad2342 as d2342as das d a342sd as d";
//     numberInString(n, string) 
//     })   
//   })

//вызов проверки 3 залания
// readline.question(`Enter the radius: `, (radius) => {
//     readline.close();
//     console.log(circleSquare(radius));
//     // console.log(triangleSquare(3,4,5));
// })

// readline.question(`Enter the a: `, (a) => {
//     readline.question(`Enter the b: `, (b) => {
//         readline.question(`Enter the c: `, (c) => {
//             readline.close();
//             console.log(triangleSquare(a,b,c));
//         })
//     })
// })

//функция посимфольного перхода
// function* loopify(string) {
//     //прохожу по каждому символу строки
//     for (let i = 0; i <= string.length; i++) {
//         //когда доходим до конца строки обнуляим i
//         if(string.length == i){
//             i = 0;
//         }
//         // возобновляю текущий элемент
//         yield string[i];
//     }
//   }

// function strlooop(){
//     console.log(strloop.next().value);
// }
// const strloop = loopify("str");

// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop();

var GLOBAL_STR = ""
var GLOBAL_STR_INDEX = 0
//функция посимфольного перхода
function loopify(string) {
    GLOBAL_STR = string
    //возврат функции вывода элемента
    return function () {
        //вывожу каждый символ строки
        console.log(GLOBAL_STR[GLOBAL_STR_INDEX])
        //повышвю индекс
        GLOBAL_STR_INDEX += 1
        //если дошли до последнего символа первожу индекс на первый
        if (GLOBAL_STR_INDEX > GLOBAL_STR.length - 1) {
            GLOBAL_STR_INDEX = 0
        }
    }
}
const strloop = loopify("str");
strloop(); //  ’s’
strloop(); //  ’t’
strloop(); //  ’r’
strloop(); //  ’s’
strloop(); //  ’t’
strloop(); //  ’r’
