import fs from 'fs';
import { Jimp } from 'jimp';

async function processImage(inputFile, outputFile) {
  try {
    const buffer = fs.readFileSync(inputFile);
    const image = await Jimp.read(buffer);
    
    // Scan pixel by pixel to remove white background
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      if (this.bitmap.data[idx + 0] > 240 && 
          this.bitmap.data[idx + 1] > 240 && 
          this.bitmap.data[idx + 2] > 240) {
        this.bitmap.data[idx + 3] = 0; 
      }
    });
    
    await image.write(outputFile);
    console.log(`Successfully processed ${inputFile} to transparent background -> ${outputFile}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Skipping missing file: ${inputFile}`);
    } else {
      console.error(`Error processing ${inputFile}:`, err);
    }
  }
}

async function run() {
  await processImage('logoname.png', 'public/logoname.png');
  await processImage('logofull.png', 'public/logofull.png');
}

run();
