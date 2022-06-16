//creioamo le variabili dei numeri lasciandola non definità
let indexN;
//creioamo le variabili dei numeri multipli di 3 e 5 lasciandole non definità
let nMultiple3;
let nMultiple5;

//*creo una var del parent a cui voglio agg. elementi
let boxContainer = document.querySelector(`.box_container`);

// stampiamo in console i numeri progressivi da 1 a 100 
//!ricorda i èun valore numerico mai cambiarlo facendolo diventare una striga perchè se verificato si fermerà (i=`stringa`)

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
        console.log(`fizzbuzz`); 
    } //! se solo nM3 è vera allora;

    else if( nMultiple3 == true){
        //!stampa in console `fizz`
        console.log(`fizz`);
    } //! se solo nM5 è vere allora;
    else if( nMultiple5 == true){

            //!stampa in console `buzz`
            console.log(`buzz`);

            //! se nM3 and nM5 sono false allora;
        }
    console.log(i);
    //*creo una variaile con l'elemento che voglio creare

    let boxElement =document.createElement('div');
    //*aggiungiamo a questo div la classi: box_dom

      boxElement.classList.add('box_dom','col-2');
    //* la var boxElement la dichiaro = a 1 e la porto all'interno dell' html

    boxElement.innerHTML= i
    //* dico al parent(boxContainer) di aggiunger i (boxElement) creati

    boxContainer.append(boxElement)
    }
   
    