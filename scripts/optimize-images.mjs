import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = join(process.cwd(), 'public', 'images', 'projects');
const QUALITY = 80;

async function optimizeImages() {
  const files = await readdir(IMAGES_DIR);
  const jpgs = files.filter(f => /\.jpe?g$/i.test(f));

  console.log(`Found ${jpgs.length} JPG files in ${IMAGES_DIR}\n`);

  for (const file of jpgs) {
    const filePath = join(IMAGES_DIR, file);
    const tmpPath = filePath + '.tmp.jpg';
    const before = (await stat(filePath)).size;

    await sharp(filePath)
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(tmpPath);

    await unlink(filePath);
    await rename(tmpPath, filePath);

    const after = (await stat(filePath)).size;
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% saved)`);
  }

  console.log('\nDone!');
}

optimizeImages().catch(console.error);
