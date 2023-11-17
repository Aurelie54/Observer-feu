import Observer from './observer';

export default interface Vehicule extends Observer {
    type: string;
    vitesse: number;
    rouler(): void;
}
