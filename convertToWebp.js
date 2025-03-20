const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Get the target directory from command-line arguments, or default to current directory
// E.g. Run `node convertToWebp.js public/articles/the-journey-to-become-a-frontend-developer`
const directoryPath = process.argv[2] || '.';

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }

  // Process each file in the directory
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();

    // Check if the file is an image (add more extensions if needed)
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(directoryPath, file);
      // Create an output filename with a .webp extension
      const outputPath = path.join(directoryPath, path.basename(file, ext) + '.webp');

      // Convert the image to webp format
      sharp(inputPath)
        .toFormat('webp')
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to ${outputPath}`);

          // Remove the original image after successful conversion
          fs.unlink(inputPath, (unlinkErr) => {
            if (unlinkErr) {
              console.error(`Error removing original image ${file}:`, unlinkErr);
            } else {
              console.log(`Removed original image ${file}`);
            }
          });
        })
        .catch(err => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
