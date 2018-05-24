const sass = require('sass');
const fs = require('fs-extra');

const compiled = sass.renderSync({
  file: './sass/index.scss'
});

const css = compiled.css.toString();

fs.writeFileSync('./bin/index.css', css);