


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
    seDeplacer(x) {
    }
    
    payer(x) {
    }
    
    couper(x, y) {
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