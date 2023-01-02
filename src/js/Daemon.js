/* eslint-disable no-useless-constructor */

import CharacterWizards from './сharacterWizards';

export default class Daemon extends CharacterWizards {
  constructor(name) {
    super(name);
    super.name = name;
    super.type = 'Daemon';
    super.attack_property = 10;
    super.defence = 40;
  }
}
