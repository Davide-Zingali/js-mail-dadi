// Gioco dei dadi
// collegamento a bottone
var bottoneInput = document.getElementById('bottone')

// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
bottoneInput.addEventListener('click',
  function() {
    var numeroRandomUtente = Math.ceil(Math.random() * 6);
    var utenteOutput = document.getElementById('utente').innerHTML = numeroRandomUtente;
    // console.log('numero utente: ' + numeroRandomUtente);

    var numeroRandomComputer = Math.ceil(Math.random() * 6);
    var computerOutput = document.getElementById('computer').innerHTML = numeroRandomComputer;
    // console.log('numero computer: ' + numeroRandomComputer);

    // condizioni
    if (numeroRandomUtente > numeroRandomComputer) {
      var outputRisultato = document.getElementById('output-risultato').innerHTML = 'Complimenti caro Utente hai Vinto!';
      // var colore = document.getElementById('bottone2');
      // colore.className = colore.classList + 'color-vincita';
      console.log('Utente hai vinto');

    } else if (numeroRandomUtente < numeroRandomComputer) {
      var outputRisultato = document.getElementById('output-risultato').innerHTML = 'Mi dispiace caro Utente hai perso!';
      // aggiunta classi
      // var colore2 = document.getElementById('output-risultato');
      // colore2.className = colore2.classList + ' color-perdita ';
      console.log('Mi dispiace caro Utente hai perso');
      console.log('colore2 ', colore2);

    } else {
      var outputRisultato = document.getElementById('output-risultato').innerHTML = 'Hai pareggiato!';
      console.log('Pareggio');
    }
  }
);
