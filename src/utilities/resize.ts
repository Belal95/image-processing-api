import sharp from 'sharp';
import path from 'path';
import { checkPath } from './checkPath';
import fs from 'fs-extra';

// a function to resize an image
const resize = async (
  image: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    //creates cache folder if not found
    if (!(await checkPath(path.resolve('images/cache'))))
      await fs.ensureDir(path.resolve('images/cache'));
    // resize and cache
    await sharp(path.resolve(`images/${image}.jpg`))
      .resize(width, height)
      .toFile(path.resolve(`images/cache/${image}-${width}-${height}.jpg`));
  } catch (err) {
    console.error(err);
  }
};

export { resize };
