import express from 'express';
import path from 'path';
import { resize } from '../../utilities/resize';
import { checkPath } from '../../utilities/checkPath';

const resizeRoute = express.Router();

resizeRoute.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const width = Number(req.query.width);
      const height = Number(req.query.height);
      const fileName = req.query.fileName as string;

      // cehck if there is paramters to start resizing
      if (width && height && fileName) {
        // make a cached file path of the image
        const filePath = path.resolve(
          `images/cache/${fileName}-${width}-${height}.jpg`
        );
        const ifSrcImageFound = checkPath(
          path.resolve(`images/${fileName}.jpg`)
        );
        const ifCachedImageFound = checkPath(filePath);
        // check if the image is found
        if (await ifSrcImageFound) {
          // check if it the image has been cached before
          if (await ifCachedImageFound) {
            // send the cached image
            res.status(203).sendFile(filePath);
          } else {
            // resize the image
            await resize(fileName, width, height);
            // send the resized image from cache
            res.status(201).sendFile(filePath);
          }
        } else {
          // Error because the image was not found
          res
            .status(404)
            .send('image not found please enter a valid file name');
        }
      } else {
        // error because the user didn't enter proper data
        res
          .status(400)
          .send(
            'Please check if you enterd a valid width, height and filname in the url as follows <br> /api/resizeImage?fileName=(enter your file name here)&width=(enter desired width here)&height=(enter desired height here)'
          );
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export { resizeRoute };
