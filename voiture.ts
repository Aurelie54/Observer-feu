import Vehicule from './vehicule';

export default class Voiture implements Vehicule {
    type: string = 'Voiture';
    vitesse: number = 60;

    rouler(): void {
        console.log('La voiture roule à une vitesse de ' + this.vitesse + ' km/h');
    }

    klaxonner(): void {
        console.log('La voiture klaxonne');
    }

    update(): void {
        console.log('La voiture réagit au changement de couleur du feu');
    }
}
