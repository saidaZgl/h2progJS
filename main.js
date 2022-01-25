/**
 * Variables
 */
const nomJoueur1 = "Tom";
const ageDuJoueur1 = 35;
const estUnHommeJoueur1 = true;

const nomJoueur2 = "Léa";
const ageDuJoueur2 = 25;
const estUnHommeJoueur2 = false;

const SEPARATEUR = "*";

/**
 * Main
 */
afficherMenu();
const choixMenu = 9;
switch (choixMenu) {
  case 1:
    ligneDeSeparation(SEPARATEUR);
    afficherLeJoueur1();
    ligneDeSeparation(SEPARATEUR);
    afficherLeJoueur2();
    ligneDeSeparation(SEPARATEUR);
    break;
  case 2:
    ligneDeSeparation(SEPARATEUR);
    AffichercomparaisonAgeDesDeuxJoueurs();
    ligneDeSeparation(SEPARATEUR);
    break;
  case 3:
    ligneDeSeparation(SEPARATEUR);
    afficherDifferenceAgeJoueurs();
    ligneDeSeparation(SEPARATEUR);
    break;
  case 9:
    console.log("À bientôt");
    break;
  default:
    console.log("Choix non traité");
    break;
}

/**
 * Functions
 */

function afficherMenu() {
  let textMenu = "";
  textMenu += "1 - Afficher les joueurs\n";
  textMenu += "2 - Comparer les 2 joueurs\n";
  textMenu += "3 - Calculer la différence d'âge\n";
  textMenu += "9 - Quitter\n";
  console.log(textMenu);
}

function afficherLeJoueur1() {
  console.log(`Le Nom du joueur 1 : ${nomJoueur1}`);
  console.log(`Âge du joueur 1 : ${ageDuJoueur1}`);
  afficherGenreJoueur(estUnHommeJoueur1);
}

function afficherLeJoueur2() {
  console.log("%s est le Nom du joueur 2", nomJoueur2);
  console.log("%d ans est l'âge de %s ", ageDuJoueur2, nomJoueur2);
  afficherGenreJoueur(estUnHommeJoueur2);
}

function AffichercomparaisonAgeDesDeuxJoueurs() {
  if (ageDuJoueur1 > ageDuJoueur2) {
    console.log("Le joueur 1 est le plus âgé");
  } else if (ageDuJoueur2 > ageDuJoueur1) {
    console.log("Le joueur 2 est la plus âgé");
  } else {
    console.log("Les 2 joueurs ont le même âge !");
  }
}

function afficherGenreJoueur(bool) {
  if (bool) {
    console.log("Le joueur est un homme");
  } else {
    console.log("Le joueur est une femme");
  }
}

function ligneDeSeparation(toto) {
  let ligneSeparationText = "";
  for (let i = 0; i < 30; i++) {
    ligneSeparationText += toto;
  }
  console.log(ligneSeparationText);
}

function calculDifferenceAgeJoueurs() {
  let differenceAge = ageDuJoueur1 - ageDuJoueur2;
  if (differenceAge < 0) {
    differenceAge = -differenceAge;
  }
  return differenceAge;
}

function afficherDifferenceAgeJoueurs() {
  const differenceAgeJoueurs = calculDifferenceAgeJoueurs();
  console.log(
    `La différence d'âge entre les 2 joueurs est de ${differenceAgeJoueurs} ans.`
  );
}
