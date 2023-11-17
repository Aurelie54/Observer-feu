import Vehicule from './vehicule';

export default class Velo implements Vehicule {
    type: string = 'Vélo';
    vitesse: number = 20;

    rouler(): void {
        console.log('Le vélo roule à une vitesse de ' + this.vitesse + ' km/h');
    }

    sonnette(): void {
        console.log('Le vélo sonne avec sa sonnette');
    }

    update(): void {
        console.log('Le vélo réagit au changement de couleur du feu');
    }
}

