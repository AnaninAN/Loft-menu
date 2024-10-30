import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    const expexted = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expexted);
  });
  test('with mods', () => {
    const expexted = 'someClass class1 class2';
    expect(classNames('someClass', { class1: true, class2: true }, [])).toBe(
      expexted
    );
  });
  test('with mods false', () => {
    const expexted = 'someClass class2';
    expect(classNames('someClass', { class1: false, class2: true }, [])).toBe(
      expexted
    );
  });
});
