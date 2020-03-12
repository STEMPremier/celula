/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const SVGO = require('svgo');
const svgoOpts = require('./svgoOpts.js');

const svgo = new SVGO(svgoOpts);
const iconPath = 'src/**/*.svg'; // accept as a param

const getName = filepath => path.basename(filepath, path.extname(filepath));

const optimize = globPath => {
  // turn the glob into a list of file paths
  const filepaths = glob.sync(globPath);

  filepaths.forEach(filepath => {
    // just use the file name as the icon name
    const name = getName(filepath);

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) throw err;

      console.log(`Optimizing icon: ${name}.svg`);

      svgo
        .optimize(data, { path: filepath })
        // svgo from the cli overwrites the source file by default
        // not the case when run as a module
        .then(result => fs.writeFileSync(filepath, result.data))
        .catch(e => console.error(e));
    });
  });
};

optimize(iconPath);
/* eslint-disable no-console */
/* eslint-enable import/no-extraneous-dependencies */
