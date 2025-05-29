#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert input to camelCase
function toCamelCase(str) {
  return str
    .replace(/[-_ ]+([a-zA-Z])/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

// Find the root of the project
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

function main() {
  const inputName = process.argv[2];

  if (!inputName) {
    console.error('❌ Please provide a pattern name:');
    console.error('   npm run generate-pattern "strategy-pattern"');
    process.exit(1);
  }

  const patternName = toCamelCase(inputName);
  const projectRoot = findProjectRoot(__dirname);
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
