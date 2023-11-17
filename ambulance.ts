import Vehicule from './vehicule';

export default class Ambulance implements Vehicule {
    type: string = 'Ambulance';
    vitesse: number = 80;

    rouler(): void {
        console.log('L\'ambulance roule à une vitesse de ' + this.vitesse + ' km/h');
    }

    allumerSirene(): void {
        console.log('L\'ambulance allume sa sirène');
    }

    update(): void {
        console.log('L\'ambulance réagit au changement de couleur du feu');
    }
}

