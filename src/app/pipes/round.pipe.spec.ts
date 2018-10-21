import { RoundPipe } from "./round.pipe";

describe('Pipes Test', () => {
  describe('Round pipe test', () => {
    const pipe = new RoundPipe();

    const testRound = 1.5;
    const testCeil = 1.001;
    const testFloor = 1.9;

    it('Sould return default result as round', () => {
      expect(pipe.transform(testRound)).toBe(2);
    });

    it('Sould return rounded result', () => {
      expect(pipe.transform(testRound, 'round')).toBe(2);
    });

    it('Sould return ceil result', () => {
      expect(pipe.transform(testCeil, 'ceil')).toBe(2);
    });

    it('Sould return floor result', () => {
      expect(pipe.transform(testFloor, 'floor')).toBe(1);
    });
  });
});
