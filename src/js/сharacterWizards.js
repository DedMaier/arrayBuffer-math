import Character from './Character';

export default class CharacterWizards extends Character {
  constructor(name) {
    super(name);
    this.stonedHave = false;
  }

  set stoned(value) {
    this.stonedHave = value;
  }

  get stoned() {
    return this.stonedHave;
  }

  set attack(cell) {
    this.cell = cell;
  }

  get attack() {
    let result = this.attack_property * (1 + (1 - this.cell) / 10);
    if (this.stonedHave) {
      result -= Math.log2(this.cell) * 5;
    }
    return Math.round(result);
  }
}
