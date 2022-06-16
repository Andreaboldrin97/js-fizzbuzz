//* creioamo le variabili dei numeri lasciandola non definità
let indexN;
//* creioamo le variabili dei numeri multipli di 3 e 5 lasciandole non definità
let nMultiple3
let nMultiple5;


// stampiamo in console i numeri progressivi da 1 a 100 

for( let i = 1 ; i <= 100 ; i = i + 1){
    //? assegniamo una var per i N° multipli di 3 e 5 all'interno della var (i)
    let nMultiple3 = i % 3 == 0;
    let nMultiple5 = i % 5 == 0;

    console.log(nMultiple3);
    console.log(nMultiple5);
    console.log(i);
    if( nMultiple3 == true){
        i == `fizz`;
    }
}