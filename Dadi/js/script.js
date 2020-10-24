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
      console.log('Utente hai vinto');
    } else if (numeroRandomUtente < numeroRandomComputer) {
      var outputRisultato = document.getElementById('output-risultato').innerHTML = 'Mi dispiace caro Utente hai perso!';
      console.log('Mi dispiace caro Utente hai perso');
    } else {
      var outputRisultato = document.getElementById('output-risultato').innerHTML = 'Hai pareggiato!';
      console.log('Pareggio');
    }
  }
);
