const fs = require('fs');
const path = require('path');

const projectDir = 'c:/Users/yoonys/Desktop/PROJECT/wedding_trip';

// Read files
let html = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(projectDir, 'styles.css'), 'utf8');
let js = fs.readFileSync(path.join(projectDir, 'app.js'), 'utf8');

// Convert images to Base64
const imgMap = {
  'assets/wedding_trip_hero_1785060680546.png': 'image/png',
  'assets/dubai_view_1785060693675.png': 'image/png',
  'assets/barcelona_view_1785060704818.png': 'image/png',
  'assets/madrid_view.jpg': 'image/jpeg',
  'assets/porto_view_1785060714984.png': 'image/png',
  'assets/lisbon_view_1785060725429.png': 'image/png'
};

for (const [relPath, mimeType] of Object.entries(imgMap)) {
  const fullPath = path.join(projectDir, relPath);
  if (fs.existsSync(fullPath)) {
    const b64 = fs.readFileSync(fullPath).toString('base64');
    const dataUri = `data:${mimeType};base64,${b64}`;
    html = html.split(relPath).join(dataUri);
    js = js.split(relPath).join(dataUri);
  }
}

// Inline CSS and JS
html = html.replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`);
html = html.replace('<script src="app.js"></script>', `<script>\n${js}\n</script>`);

// Save single shareable file
const outPath = path.join(projectDir, 'wedding_trip_shareable.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully created single shareable HTML file:', outPath);
