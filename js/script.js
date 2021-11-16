// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindrom


// function to check str is palindrome or not
// function check_palindrome( string )
// {
//   let c = string.length -1;
//   for( let i = 0 ; i < c/2 ;i++)
//   {
//     let x = string[i] ;//forward character
//     let y = string[c-i];//backward character
//     if( x != y)
//     {
//       // if all character forward and backword won't match then string is not a palindrome.
//       return false;
//     }
//   }
//   /// if all character forward and backword will match then string is a palindrome.
//   return true;
//    }

// let ask = prompt('insert a palindrome word');
// let check = check_palindrome(ask);
// console.log(check);

// document.querySelector('.here').innerHTML = 'The palindromicity value  for : '+ ask +', is';

// document.querySelector('.bum').innerHTML =  check +'.';


//ESERCIZIO II

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

function add(io,lei) {
    return parseInt (io) + parseInt(lei);
};



const ask = prompt('Choose : ODD or EVEN');
const play =  prompt ('insert a number >0 and 5<');
const x = 'odd';
const y = 'even';
let R1;
// const play ='';

if( ask == y && play % 2 == 0 ){ 
    console.log('Play value is: ' + play);   
    let R1 = getRndInteger(1,6);
    console.log('R1 value is: ' + R1);
    const adder = add(play,R1);
    console.log('the add value is: ' + adder % 2);
    if(R1 > play){
        console.log('R1 ' + 'WINS' + R1);
    }else{
        console.log('play ' + 'WINS'+ play);
    }

    document.querySelector('.here').innerHTML ='The sum value is : ';
    document.querySelector('.bum').innerHTML = adder;

}else if(ask == x && play % 2 == 1){
        console.log('Play value is: ' + play);  
        let R1 = getRndInteger(1,6);
        console.log('R1 value is: ' + R1);

        const adder = add(play,R1);
        console.log('the add value is: ' + adder % 2);
        if(R1 > play){
            console.log('R1 ' + 'WINS'+ R1);
        }else{
            console.log('Play ' + 'WINS '+ play);
        }

        document.querySelector('.here').innerHTML ='The sum value is : ';
          document.querySelector('.bum').innerHTML = adder; 
}else {
         alert('fatal error: press cntrl + shift + r')
};    






