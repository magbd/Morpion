$jeu = document.getElementById('jeu');
$case = document.getElementById('case');
$clear = document.getElementById('clear');

$tableau = $jeu.children;

$joueur = 0;

function play(e){
  if (verifie(e)) { //fonction qui vérifie si la case est vide
    alert ("Choisissez une autre case !");
  } else { // fonction qui selectionne la case et incrémente $joueur
    selectionne(e);
  }
}

function selectionne(e) {
  $joueur ++;
  // +++++++++++++++++++++++++++++++++++++++++++++
  // VERIFIE QUE LA SELECTION DES DIV FONCTIONNE
  // +++++++++++++++++++++++++++++++++++++++++++++
  // alert(e.target.id)
  // // // e.target correspond à la case qui a été cliqué dans le jeu
  // +++++++++++++++++++++++++++++++++++++++++++++


  if ($joueur % 2 == 1){
    e.target.classList.add("player1");
  }
  else if ($joueur % 2 == 0){
    e.target.classList.add("player2");
  }

win();

  if ($joueur === 9){
    alert("Partie terminée !");
    restart();
  }


}

$jeu.onclick = play;

function verifie(e) {
  if (e.target.classList.contains("player1") || e.target.classList.contains("player2")) {
    return true
    //si condition true, la fonction s'arrete et exécute ligne 11 alert("Choisissez une autre case !")
  } else {
    return false
    // si condition false, lance la ligne  13 et lance la fonction selectionne()
  }
}

function restart(){
  // alert("restart");
  for (var i = 0; i < $tableau.length; i++){
    // alert($tableau[i].className);
    if ($tableau[i].classList.contains("player1")) {
      // alert("restart");
      $tableau[i].classList.remove("player1");
    }
    else {
      $tableau[i].classList.remove("player2");
    }

  }
  $joueur = 0
}

$clear.onclick = restart;

function win(){
  $player1 = document.getElementById("player1").value;
  $player2 = document.getElementById("player2").value;
  // si j'ai mes cases selectionné (x1Y1 && X2y1, ... ) &&
    if (
      //horizontales
      ($tableau[0].classList.contains("player1") && $tableau[1].classList.contains("player1") && $tableau[2].classList.contains("player1")) ||
      ($tableau[3].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[5].classList.contains("player1")) ||
      ($tableau[6].classList.contains("player1") && $tableau[7].classList.contains("player1") && $tableau[8].classList.contains("player1")) ||
      //verticales
      ($tableau[0].classList.contains("player1") && $tableau[3].classList.contains("player1") && $tableau[6].classList.contains("player1")) ||
      ($tableau[1].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[7].classList.contains("player1")) ||
      ($tableau[2].classList.contains("player1") && $tableau[5].classList.contains("player1") && $tableau[8].classList.contains("player1")) ||
      //diagonales
      ($tableau[0].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[8].classList.contains("player1")) ||
      ($tableau[2].classList.contains("player1") && $tableau[4].classList.contains("player1") && $tableau[6].classList.contains("player1"))
    ) {
      alert($player1 + " a gagné !");
      restart();
    }

    else if (
      //horizontales
      ($tableau[0].classList.contains("player2") && $tableau[1].classList.contains("player2") && $tableau[2].classList.contains("player2")) ||
      ($tableau[3].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[5].classList.contains("player2")) ||
      ($tableau[6].classList.contains("player2") && $tableau[7].classList.contains("player2") && $tableau[8].classList.contains("player2")) ||
      //verticales
      ($tableau[0].classList.contains("player2") && $tableau[3].classList.contains("player2") && $tableau[6].classList.contains("player2")) ||
      ($tableau[1].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[7].classList.contains("player2")) ||
      ($tableau[2].classList.contains("player2") && $tableau[5].classList.contains("player2") && $tableau[8].classList.contains("player2")) ||
      //diagonales
      ($tableau[0].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[8].classList.contains("player2")) ||
      ($tableau[2].classList.contains("player2") && $tableau[4].classList.contains("player2") && $tableau[6].classList.contains("player2"))
    ) {
      alert($player2 + " a gagné !");
      restart();
    }
}

function clearField(input){
  input.value = "";
}
