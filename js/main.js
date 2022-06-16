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
    //? stampiamole in console

    console.log(nMultiple3);
    console.log(nMultiple5);
    //!creiamo un if con le possibilità :

    //! se nM3 and nM5 sono vere allora;
    if((nMultiple3 == true) && ( nMultiple5 == true )){
        //!stampa in console `fizzbuzz`
        console.log`fizzbuzz`; 
    }
    else{
        //! se solo nM3 è vera allora;

        if( nMultiple3 == true){
            //!stampa in console `fizz`
            console.log`fizz`;

            //! se solo nM5 è vere allora;

        }else if( nMultiple5 == true){
            //!stampa in console `buzz`
            console.log`buzz`;

            //! se nM3 and nM5 sono false allora;
        }else{
            //! la variabile i rimane i
            i=i
        }
    }
   
    console.log(i);
}