import { resize } from '../../utilities/resize';
import fs from 'fs-extra';
import path from 'path';

describe('Test the resize functin', (): void => {
  it('tests if the fjord resize & cached with width 200 & height 200', () => {
    expect(async (): Promise<void> => {
      await resize('fjord', 200, 200);
    }).not.toThrow();
  });
});

afterAll(async (): Promise<void> => {
  await fs.remove(path.resolve('images/cache'));
});
