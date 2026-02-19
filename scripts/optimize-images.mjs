import sharp from 'sharp';
import { readdir, stat, rename, unlink, access } from 'fs/promises';
import { join } from 'path';

const PROJECTS_DIR = join(process.cwd(), 'public', 'images', 'projects');
const PUBLIC_DIR = join(process.cwd(), 'public');
const QUALITY = 80;

async function optimizeImages() {
  // 1. Optimize project JPGs and generate WebP versions
  const files = await readdir(PROJECTS_DIR);
  const jpgs = files.filter(f => /\.jpe?g$/i.test(f));

  console.log(`Found ${jpgs.length} JPG files in ${PROJECTS_DIR}\n`);

  for (const file of jpgs) {
    const filePath = join(PROJECTS_DIR, file);
    const tmpPath = filePath + '.tmp.jpg';
    const webpPath = join(PROJECTS_DIR, file.replace(/\.jpe?g$/i, '.webp'));
    const before = (await stat(filePath)).size;

    // Re-compress JPG
    await sharp(filePath)
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(tmpPath);

    await unlink(filePath);
    await rename(tmpPath, filePath);

    const after = (await stat(filePath)).size;
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% saved)`);

    // Generate WebP version
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const webpSize = (await stat(webpPath)).size;
    console.log(`  → ${file.replace(/\.jpe?g$/i, '.webp')}: ${(webpSize / 1024).toFixed(0)}KB`);
  }

  // 2. Resize and convert logo to WebP (400px wide)
  const logoPath = join(PUBLIC_DIR, 'logo.png');
  const logoWebpPath = join(PUBLIC_DIR, 'logo.webp');

  try {
    await access(logoPath);
    const logoBefore = (await stat(logoPath)).size;

    await sharp(logoPath)
      .resize(400)
      .webp({ quality: QUALITY })
      .toFile(logoWebpPath);

    const logoAfter = (await stat(logoWebpPath)).size;
    console.log(`\nlogo.png: ${(logoBefore / 1024).toFixed(0)}KB → logo.webp: ${(logoAfter / 1024).toFixed(0)}KB`);
  } catch {
    console.log('\nlogo.png not found, skipping logo optimization');
  }

  console.log('\nDone!');
}

optimizeImages().catch(console.error);
