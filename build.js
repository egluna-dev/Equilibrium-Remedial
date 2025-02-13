const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const inputDir = path.join(__dirname, 'views');  // EJS templates folder
const outputDir = path.join(__dirname, 'dist'); // Output folder for static HTML

fs.ensureDirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (path.extname(file) === '.ejs') {
    const template = fs.readFileSync(path.join(inputDir, file), 'utf-8');
    const html = ejs.render(template);
    const outputFile = path.join(outputDir, file.replace('.ejs', '.html'));
    fs.writeFileSync(outputFile, html);
    console.log(`Generated: ${outputFile}`);
  }
});

console.log('All EJS templates have been compiled into static HTML.');