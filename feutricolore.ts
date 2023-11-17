import Observer from './observer';

enum CouleurFeu {
    Vert,
    Jaune,
    Rouge
}

export default class FeuTricolore {
    private couleurActuelle: CouleurFeu = CouleurFeu.Vert;
    private observers: Observer[] = [];

    //On ajoute un observateur à la liste des observateurs du sujet, on appelle cette méthode pour l'abonnement
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    changerCouleur(): void {
        // Logique pour changer la couleur du feu
        switch (this.couleurActuelle) {
            case CouleurFeu.Vert:
                this.couleurActuelle = CouleurFeu.Jaune;
                break;
            case CouleurFeu.Jaune:
                this.couleurActuelle = CouleurFeu.Rouge;
                break;
            case CouleurFeu.Rouge:
                this.couleurActuelle = CouleurFeu.Vert;
                break;
        }

        console.log('La couleur du feu est maintenant ' + CouleurFeu[this.couleurActuelle]);
        this.notifyObservers();
    }
}