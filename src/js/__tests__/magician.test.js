/* eslint-disable */
import Magician from "../magician";

test('Вернет объект', () => {
  const мagician = new Magician('Макс');
  const expected = {
    name: 'Макс',
    type: 'Magician',
    health: 100,
    level: 1,
    attack_property: 10,
    defence: 40,
    stonedHave: false
  };
  expect(мagician).toEqual(expected);
});

test('Проверяем атаку', () => {
  const мagician = new Magician('Макс');
  мagician.attack = 2;
  const expected = 9;
  expect(мagician.attack).toBe(expected);
});

test('Проверяем атаку с туманом', () => {
  const мagician = new Magician('Макс');
  мagician.attack = 2;
  const expected = 4;
  const stonedHave = true
  мagician.stoned = true;
  expect(мagician.stoned).toBe(stonedHave);
  expect(мagician.attack).toBe(expected);
});
