/* eslint-disable */
import Daemon from "../daemon";

test('Вернет объект', () => {
  const мagician = new Daemon('Макс');
  const expected = {
    name: 'Макс',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack_property: 10,
    defence: 40,
    stonedHave: false
  };
  expect(мagician).toEqual(expected);
});

test('Проверяем атаку', () => {
  const мagician = new Daemon('Макс');
  мagician.attack = 2;
  const expected = 9;
  expect(мagician.attack).toBe(expected);
});

test('Проверяем атаку с туманом', () => {
  const мagician = new Daemon('Макс');
  мagician.attack = 2;
  const expected = 4;
  const stonedHave = true
  мagician.stoned = true;
  expect(мagician.stoned).toBe(stonedHave);
  expect(мagician.attack).toBe(expected);
});
