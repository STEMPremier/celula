/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const SVGO = require('svgo');
const svgoOpts = require('./svgoOpts.js');

const svgo = new SVGO(svgoOpts);
const iconPath = 'src/**/*.svg'; // accept as a param

// Get the icon name
const getName = filepath => path.basename(filepath, path.extname(filepath));

// Build the optimized SVG data
const optimize = globPattern => {
  const filepaths = glob.sync(globPattern);

  filepaths.forEach(filepath => {
    const name = getName(filepath);

    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) throw err;

      console.log(`Optimizing icon: ${name}`);

      svgo
        .optimize(data, { path: filepath })
        .then(result => fs.writeFileSync(filepath, result.data))
        .catch(e => console.error(e));
    });
  });
};

optimize(iconPath);
/* eslint-disable no-console */
/* eslint-enable import/no-extraneous-dependencies */
