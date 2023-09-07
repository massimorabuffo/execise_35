function repeatHello(callback) {
    setInterval(callback, 1000);
}

repeatHello(() => console.log('Hello'));

// Anche se viene usata una normale funzione al posto di una arrow function (come nell'esempio qui sotto)
// il codice funziona lo stesso, ma le arrow rendono il codice più leggibile

// repeatHello(function () {console.log('Hello')});