import fs from 'fs-extra';

// a function to check if a pathis found
const checkPath = async (path: string): Promise<boolean> => {
  try {
    const exist: boolean = await fs.pathExists(path);
    return exist;
  } catch (err) {
    return false;
  }
};

export { checkPath };
