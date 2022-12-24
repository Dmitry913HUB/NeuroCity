//load bar
// const ProgressBar = require('progress')
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

function phoneNumber(number){
    const regex = /^\d{10}$/g;
    const found = number.match(regex);
    if(found){
        return `Phone number: 8 (${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}-${number[8]}${number[9]}`
    }
    else{
        return `You are not entering a phone number`
    }
}
function cardNumber(number){
    const regex = /^\d{16}$/g;
    const found = number.match(regex);
    if(found){
        return `Card number: ${number[0]}${number[1]}${number[2]}${number[3]} ${number[4]}${number[5]}${number[6]}${number[7]} ${number[8]}${number[9]}${number[10]}${number[11]} ${number[12]}${number[13]}${number[14]}${number[15]}`
    }
    else{
        return `You are not entering a card number`
    }
}
// readline.question(`Enter the string `, (number) => {  
//     readline.close();
//     console.log(phoneNumber(number))
//     // console.log(cardNumber(number))
//   })

function numberInString(n, string) {
    const regex = /\d+/g;
    const found = string.match(regex);
    found.sort((a, b) => b - a);
    for (let i = 0; (i < found.length)&&(i < n); i++){
        process.stdout.write(found[i]+" ");
    }
}

readline.question(`Enter the string: `, (string) => {
    readline.close();
    var n = 10;
    var str = "asdas dasd asdasd asd 1 2 3 4 45 4534 234 23424 234 324 234 24 ad2342 as d2342as das d a342sd as d";
    numberInString(n, str)    
  })


