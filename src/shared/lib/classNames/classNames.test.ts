import { classNames } from './classNames';

describe('classNames', () => {
  const expected = 'class1';

  test('Только с первым параметром', () => {
    expect(classNames('class1')).toBe(expected);
  });

  test('С дополнительным массивом параметров', () => {
    const expected = 'class1 class2 class3';

    expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
  });

  test('С модами и дополнительным массивом параметров', () => {
    const expected = 'class1 class4 class5 class2 class3';

    expect(classNames(
      'class1',
      { class4: true, class5: true },
      ['class2', 'class3']
    )).toBe(expected);
  });

  test('С модами и дополнительным массивом параметров (один из модов false)', () => {
    const expected = 'class1 class5 class2 class3';

    expect(classNames(
      'class1',
      { class4: false, class5: true },
      ['class2', 'class3']
    )).toBe(expected);
  });

  test('С модами и дополнительным массивом параметров (один из модов undefined)', () => {
    const expected = 'class1 class5 class2 class3';

    expect(classNames(
      'class1',
      { class4: false, class5: true, class6: undefined },
      ['class2', 'class3']
    )).toBe(expected);
  });
});
