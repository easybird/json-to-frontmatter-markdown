/* @flow */
import mkdirp from 'mkdirp';
import fs from 'fs'

type TWriteToFile = {
  content: string,
  path: string,
  fileName: string
}

function createDirectories(path) {
  return new Promise((resolve, reject) =>
    mkdirp(path, (err) => {
      if(err) {
          console.log(err);
          return reject(err);
      }
      return resolve();
  })
  )
}

function writeToFile({ content, path, fileName}: TWriteToFile) {
  const doWriteToFile = () => new Promise((resolve, reject) => {
      fs.writeFile(`${path}/${fileName}`, content, (err) => {
        if(err) {
            console.log(err);
            return reject(err);
        }
        console.log(`The file was saved on location: ${path} with name: ${fileName}`);
        return resolve();
      })
    });

    return createDirectories(path)
      .then(doWriteToFile);
}

export default writeToFile
