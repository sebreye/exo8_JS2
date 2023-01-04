// ## EXO1
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }
// ﻿


class Lieu {
    constructor(nom, contenu) {
        this.nom = nom;
        this.contenu = contenu;
}
}

class Cuisine extends Lieu {
    constructor(nom, contenu, ingrédients) {
        super(nom, contenu);
        this.ingrédients = ingrédients;
    }
}

class Ingrédients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix  = prix
    }
}

class Personne {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }
}


const maison = new Lieu("maison", []);
const epicerie = new Epicerie("epicerie", [], []);
const cuisine = new Cuisine("cuisine", [], []);

const poivron = new Ingredient("poivron", "entier", 1);
const oignon = new Ingredient("oignon", "entier", 2);
const oeuf = new Ingredient("oeuf", "entier", 4);
const epice = new Ingredient("epice", "moulu", 3.25);
const paprika = new Ingredient("paprika", "moulu", 1.5);
const fromage = new Ingredient("fromage", "coupé", 1.6);

const personnage = new Personne("Maxime", "néant", 100, []);