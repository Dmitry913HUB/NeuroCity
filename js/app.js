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
readline.question(`Enter the n: `, (n) => {
    readline.question(`Enter the string: `, (string) => {
    readline.close();
    // var n = 10;
    // var string = "asdas dasd asdasd asd 1 2 3 4 45 4534 234 23424 234 324 234 24 ad2342 as d2342as das d a342sd as d";
    numberInString(n, string) 
    })   
  })


