import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const inputDir = path.resolve(process.cwd(), 'public', 'assets');

const inputFile = path.join(inputDir, 'filosofia-header.png');
const outputFile = path.join(inputDir, 'filosofia-header.webp');

sharp(inputFile)
  .webp({ quality: 80 })
  .toFile(outputFile, (err, info) => {
    if (err) {
      console.error(`Error converting ${path.basename(inputFile)}:`, err);
    } else {
      console.log(`Successfully converted ${path.basename(inputFile)} to ${path.basename(outputFile)}`);
    }
  });
