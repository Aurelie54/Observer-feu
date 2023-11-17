import FeuTricolore from './feutricolore';
import Voiture from './voiture';
import Velo from './velo';
import Ambulance from './ambulance';
import Pieton from './pieton';

const feu = new FeuTricolore();
const voiture = new Voiture();
const velo = new Velo();
const ambulance = new Ambulance();
const pieton = new Pieton();

// Les véhicules et le piéton s'abonnent au feu tricolore
feu.addObserver(voiture);
feu.addObserver(velo);
feu.addObserver(ambulance);
feu.addObserver(pieton);

feu.changerCouleur();

