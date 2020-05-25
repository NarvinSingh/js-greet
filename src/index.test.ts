import { greet, greetCas } from './index';

describe('greet', () => {
  test('Normal greeting', () => {
    expect(greet('Narvin')).toBe('Hello Narvin');
  });

  test('Other greeting', () => {
    expect(greet('Xavier')).toBe('Howdy Xavier');
  });
});

describe('greetCas', () => {
  test('Casual greeting', () => {
    expect(greetCas('Narvin')).toBe("'Sup Narvin");
  });
});
