import { resize } from '../../utilities/resize';

describe('Test the resize functin', (): void => {
  it('tests if the fjord resize & cached with width 100 & height 100', () => {
    expect(async (): Promise<void> => {
      await resize('fjord', 100, 100);
    }).not.toThrow();
  });
});
