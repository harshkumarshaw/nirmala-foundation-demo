const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.arw', '.webp'].includes(ext)) {
        await optimizeImage(filePath, ext);
      }
    }
  }
}

async function optimizeImage(filePath, ext) {
  const outputFilePath = filePath.replace(/\.arw$/i, '.jpg');
  const tempPath = filePath + '.tmp';

  console.log(`Processing: ${path.relative(TARGET_DIR, filePath)}...`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if too wide
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH);
    }

    // Convert or compress
    if (ext === '.arw') {
      await pipeline.jpeg({ quality: QUALITY }).toFile(outputFilePath);
      fs.unlinkSync(filePath); // Delete ARW after conversion
      console.log(`  ?? Converted ARW to JPG: ${path.basename(outputFilePath)}`);
    } else {
      // For existing images, we use a temp file and then rename
      await pipeline.jpeg({ quality: QUALITY, progressive: true }).toFile(tempPath);
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    }
  } catch (err) {
    console.error(`  ?? Error processing ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

console.log('?? Starting Image Optimization...');
walkDir(TARGET_DIR)
  .then(() => console.log('\n? Optimization Complete! Semua images now web-ready.'))
  .catch(err => console.error('? Fatal error:', err));
