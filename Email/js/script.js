// // Mail
// // Chiedi all’utente la sua email
var inputEmail = prompt('Inserisci la tua mail');

// // lista mail accessibili tramite array
var mailArrayA = ['davide@gmail.com', 'francesca@gmail.com', 'pippo@gmail.com', 'annalisa@gmail.com', 'arianna@hotmail.it'];

var emailCorretta = 0;

// controllo email nella lista
for (var i = 0; i < mailArrayA.length; i++) {
  if (inputEmail === mailArrayA[i]) {
    emailCorretta = 1;
  }
}

// condizioni per output
if (emailCorretta === 1) {
  console.log('Complimenti email corretta');
} else {
  console.log('Mi dispiace email inserista scorretta');
}

// stampa un messaggio appropriato sull’esito del controllo.
