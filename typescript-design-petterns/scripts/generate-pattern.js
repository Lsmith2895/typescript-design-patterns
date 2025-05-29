#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Convert input to camelCase (naive version)
function toCamelCase(str) {
  return str
    .replace(/[-_ ]+([a-zA-Z])/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

// Find the root of the project (has package.json and src/)
function findProjectRoot(currentDir) {
  let dir = currentDir;

  while (!fs.existsSync(path.join(dir, 'package.json'))) {
    const parent = path.dirname(dir);
    if (parent === dir) {
      console.error('❌ Could not find project root (missing package.json)');
      process.exit(1);
    }
    dir = parent;
  }

  return dir;
}

// Main script logic
function main() {
  const inputName = process.argv[2];

  if (!inputName) {
    console.error('❌ Please provide a pattern name:');
    console.error('   npm run generate-pattern "strategy-pattern"');
    process.exit(1);
  }

  const patternName = toCamelCase(inputName);
  const projectRoot = findProjectRoot(process.cwd());
  const srcPath = path.join(projectRoot, 'src');
  const patternPath = path.join(srcPath, patternName);

  if (fs.existsSync(patternPath)) {
    console.warn(`⚠️ Folder "${patternName}" already exists in src/. Aborting to avoid overwriting.`);
    process.exit(1);
  }

  fs.mkdirSync(patternPath);

  const files = [
    'AcademicExample.ts',
    'Diagram.tsx',
    'RealWorldExample.ts',
    'PatternView.tsx',
  ];

  files.forEach(file => {
    const filePath = path.join(patternPath, file);
    fs.writeFileSync(filePath, '');
  });

  console.log(`✅ Pattern folder "${patternName}" created in src/ with 4 empty files.`);
}

main();
