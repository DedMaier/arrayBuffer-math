/* eslint-disable no-useless-constructor */
import CharacterWizards from './сharacterWizards';

export default class Magician extends CharacterWizards {
  constructor(name) {
    super(name);
    super.name = name;
    super.type = 'Magician';
    super.attack_property = 10;
    super.defence = 40;
  }
}
