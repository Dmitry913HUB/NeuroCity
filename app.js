// подключение модуля площадей задание 3
const {triangleSquare} = require('./js/square.js');
const {circleSquare} = require('./js/square.js');
// "main": "app.js",
//  "type": "module",

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

//функция для форматирования номера телефона задание 1
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
//функция для форматирования номера карты задание 5
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

//функция для поиска чисел в строке задание 2
function numberInString(n, string) {
    //задаю регулярное выраженеи для чисел
    const regex = /\d+/g;
    //записываю массив чисел которые подходят правилу
    const found = string.match(regex);
    const foundBigInt = [1n];
    for (let i = 0; (i < found.length); i++){
        foundBigInt[i] = BigInt(found[i]);
        // process.stdout.write(foundBigInt[i].toString());
    }
    //сортирую полученный массив чисел по убыванию
    foundBigInt.sort((a, b) => (a > b) ? -1 : ((a < b) ? 1 : 0));
    //вывожу масиив чисел
    for (let i = 0; (i < foundBigInt.length)&&(i < n); i++){
        process.stdout.write(foundBigInt[i].toString()+" ");
    }
}
//вызов проверки 2 залания
// readline.question(`Enter the n: `, (n) => {
//     // readline.question(`Enter the string: `, (string) => {
//     readline.close();
//     // var n = 3;
//     var string = "asdas5357543035931336604742125245300009052807024058527668037218751941851755255624680612465991894078479290637973364587765734125935726428461570217992288787349287401967283887412115492710537302531185570938977091076523237491790970633699383779582771973038531457285598238843271083830214915826312193418602834034687 5357543035931336604742125245300009052807024058527668037218751941851755255624680612465991894078479290637973364587765734125935726428461570217992288787349287401967283887412115492710537302531185570938977091076523237491790970633699383779582771973038531457285598238843271083830214915826312193418602834034688 5357543035931336604742125245300009052807024058527668037218751941851755255624680612465991894078479290637973364587765734125935726428461570217992288787349287401967283887412115492710537302531185570938977091076523237491790970633699383779582771973038531457285598238843271083830214915826312193418602834034686";
//     numberInString(n, string) 
//     //})   
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

//задание 6 функция посимфольного перхода v1
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

//вызов 6 задания
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop(); 
// strlooop();

//задание 6 функция посимфольного перхода v2
// var GLOBAL_STR = ""
// var GLOBAL_STR_INDEX = 0
//функция посимфольного перхода
// function loopify(string) {
//     GLOBAL_STR = string
//     GLOBAL_STR_INDEX = 0
//     //возврат функции вывода элемента
//     return function () {
//         //вывожу каждый символ строки
//         console.log(GLOBAL_STR[GLOBAL_STR_INDEX])
//         //повышвю индекс
//         GLOBAL_STR_INDEX += 1
//         //если дошли до последнего символа первожу индекс на первый
//         if (GLOBAL_STR_INDEX > GLOBAL_STR.length - 1) {
//             GLOBAL_STR_INDEX = 0
//         }
//     }
// }

//вызов 6 задания
// const strloop = loopify("str");
// strloop(); //  ’s’
// strloop(); //  ’t’
// strloop(); //  ’r’
// strloop(); //  ’s’
// // strloop(); //  ’t’
// // strloop(); //  ’r’
// const strloopt = loopify("test");
// strloopt();
// strloopt();
// strloopt();
// strloopt();
// strloopt();

//задание 6 функция посимфольного перхода v3 основная
const loopify = (string) => {
    var i = 0;
    const print = () => {
        console.log(string[i]);
        i = i + 1;
        if (string.length === i) i = 0;
    };   
    return print;                      
  };
  
  const a = loopify("hello"); 
  const b = loopify("world");
//вызов 6 задания
//   a();
//   b();
//   a();
//   b();
//   a();
//   b();
//   a();
//   b();
//   a();
//   b();
//   a();
//   b();
//   a();
//   b();


// задание 4 ассинхронная загрузка файлов
//   const urlArr = ["https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-an-adult-tabby-cat-png-image_2664939.jpg","https://go64.ru/upload/quickly/cat-2143332_1280.jpg",
//   "https://cdnn11.img.sputnik.by/img/102768/82/1027688237_175:0:904:801_1920x0_80_0_0_ec162d86740126d12cfa9750eb48cbca.jpg"];

const urlArr = ["https://filesamples.com/samples/image/bmp/sample_5184%C3%973456.bmp","https://filesamples.com/samples/image/bmp/sample_1920%C3%971280.bmp","https://filesamples.com/samples/image/bmp/sample_1280%C3%97853.bmp"];
let dests = "";
const http = require("https");
const fs = require("fs");

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" });

        const request = http.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file);
                console.log(url);
            } else {
                file.close();
                fs.unlink(dest, () => {}); // Delete temp file
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        });

        request.on("error", err => {
            file.close();
            fs.unlink(dest, () => {}); // Delete temp file
            reject(err.message);
        });

        file.on("finish", () => {
            resolve();
        });

        file.on("error", err => {
            file.close();

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message);
            }
        });
    });
}

async function downloadAsFile(arr){
    for(i=0;i<arr.length;i++){
        dests = "file"+i+".bmp";
        await download(arr[i], dests);
    }            
}

//вызов загрузки фалов задание 4
// downloadAsFile(urlArr)
