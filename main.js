/**
 * Variables
 */
const nomJoueur1 = "Tom";
const ageDuJoueur1 = 25;
const estUnHommeJoueur1 = true;

const nomJoueur2 = "Léa";
const ageDuJoueur2 = 25;
const estUnHommeJoueur2 = false;

/**
 * Main
 */

/**
 * Functions
 */

afficherLesJoueurs();
comparerAgeDesDeuxJoueurs();

function afficherLesJoueurs() {
  console.log("-----------------------");

  console.log(`Le Nom du joueur 1 : ${nomJoueur1}`);
  console.log(`Âge du joueur 1 : ${ageDuJoueur1}`);

  if (estUnHommeJoueur1 === true) {
    console.log("Le joueur 1 est un homme");
  } else {
    console.log("Le joueur 1 est une femme");
  }
  console.log("-----------------------");

  console.log("%s est le Nom du joueur 2", nomJoueur2);
  console.log("%d ans est l'âge de %s ", ageDuJoueur2, nomJoueur2);

  if (estUnHommeJoueur2 === true) {
    console.log("Le joueur 2 est un homme");
  } else {
    console.log("Le joueur 2 est une femme");
  }

  console.log("-----------------------");
}

function comparerAgeDesDeuxJoueurs() {
  if (ageDuJoueur1 > ageDuJoueur2) {
    console.log("Le joueur 1 est le plus âgé");
  } else if (ageDuJoueur2 > ageDuJoueur1) {
    console.log("Le joueur 2 est la plus âgé");
  } else {
    console.log("Les 2 joueurs one le même âge !");
  }
}
