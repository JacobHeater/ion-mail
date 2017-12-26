const glob = require('glob');
const fs = require('fs-extra');

const htmlFiles = glob.sync('./src/**/*.html');
const binDirs = htmlFiles.map(f => {
  return {
    src: f,
    target: f.replace('src', 'bin')
  };
});

binDirs.forEach(p => fs.copySync(p.src, p.target));
