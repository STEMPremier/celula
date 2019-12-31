#!/usr/bin/env node
/* eslint-disable arrow-parens */

const fs = require('fs');
const path = require('path');
const { bindNodeCallback } = require('rxjs'); // eslint-disable-line import/no-extraneous-dependencies

const templatePath = path.resolve(__dirname, 'templates');

// fs.readdir(templatePath, {}, (err, files) => {
//   const observable = from(files);
//   const subscription = observable.subscribe(x => console.log(x));

//   subscription.unsubscribe();
// });

/* read the names of the files of Source Dir
 * for each file name
 *   read the file
 *   transform the content
 *   write the new file in Target Dir
 *   log the name of the new file
 * end for
 *
 * console.log('I am done')
 */

const readDirObservable = bindNodeCallback(fs.readdir);

readDirObservable(templatePath)
  .switchMap(fileList => readFilesObservable(fileList))
  .map(data => transform(data.fileName, data.content))
  .mergeMap(data => writeFileObservable(data.fileName, data.content))
  .subscribe(
    data => console.log(data.fileName, 'read'),
    err => console.err(err),
    () => console.log('I am finished'),
  );
