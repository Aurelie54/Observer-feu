import Observer from './observer';

export default class Pieton implements Observer {
    marcher(): void {
        console.log('Le piéton marche sur le trottoir');
    }

    traverser(): void {
        console.log('Le piéton traverse la route');
    }

    update(): void {
        console.log('Le piéton réagit au changement de couleur du feu');
    }
}

