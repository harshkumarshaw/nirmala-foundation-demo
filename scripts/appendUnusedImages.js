const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');
const csvPath = path.join(__dirname, '../media_links.csv');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      let rel = filePath.replace(/\\/g, '/');
      let base = path.join(__dirname, '../public').replace(/\\/g, '/');
      // simple lower case fix for windows drive letters
      if (rel.toLowerCase().startsWith(base.toLowerCase())) {
        rel = rel.substring(base.length);
      }
      fileList.push(rel);
    }
  }
  return fileList;
}

const allImagesPaths = getAllFiles(imgDir).filter(img => (img.toLowerCase().endsWith('.jpg') || img.toLowerCase().endsWith('.jpeg') || img.toLowerCase().endsWith('.png') || img.toLowerCase().endsWith('.mp4')));
const allImages = allImagesPaths.map(p => p.toLowerCase());

let csvData = fs.readFileSync(csvPath, 'utf8');
const usedImages = [];
const lines = csvData.split('\n');
for (const line of lines) {
  if (!line.trim() || line.startsWith('Position')) continue;
  const parts = line.split(',');
  if (parts.length >= 4) {
    usedImages.push(parts[parts.length - 1].trim().toLowerCase());
  }
}

const unused = allImagesPaths.filter(img => !usedImages.includes(img.toLowerCase()));

// Let's figure out how many images are currently assigned per institute so we can continue the numbering
const counters = {};
for (const line of lines) {
  if (line.includes(' Img ')) {
    const title = line.split(',')[0].trim();
    const inst = title.split(' Img ')[0].trim();
    const num = parseInt(title.split(' Img ')[1]);
    if (!counters[inst] || num > counters[inst]) {
      counters[inst] = num;
    }
  }
}

const newLines = [];
unused.forEach(img => {
  // Try to map to an institute based on folder
  const parts = img.split('/');
  let folder = parts[parts.length - 2].toUpperCase();
  
  let mapInst = folder;
  if(folder.includes('GERMAN_VISIT')) {
     mapInst = 'Gallery'; // map german visits to a "Gallery" generic prefix if needed, or simply append them to IINR
     folder = 'IINR'; // German visits often relate to IINR nursing
     mapInst = 'IINR';
  }
  if (folder === 'JMN') mapInst = 'JMN Medical';
  if (folder === 'ABOUT') mapInst = 'About'; // although About Img X is not well defined. Let's just use it.

  if (!counters[mapInst]) counters[mapInst] = 0;
  counters[mapInst]++;
  
  newLines.push(`${mapInst} Img ${counters[mapInst]},Image,Extra Image,${img}`);
});

fs.appendFileSync(csvPath, '\n' + newLines.join('\n'));
console.log('Appended ' + newLines.length + ' lines to CSV.');
