


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



let maison = new Lieu("maison", []);
let epicerie = new Epicerie("epicerie", [], []);
let cuisine = new Cuisine("cuisine", [], []);

let poivron = new Ingredient("poivron", "entier", 1);
let oignon = new Ingredient("oignon", "entier", 2);
let oeuf = new Ingredient("oeuf", "entier", 4);
let epice = new Ingredient("epice", "moulu", 3.25);
let paprika = new Ingredient("paprika", "moulu", 1.5);
let fromage = new Ingredient("fromage", "coupé", 1.6);

let personnage = new Personne("Maxime", "néant", 100, []);