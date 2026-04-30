const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(srcDir);
let totalUpdated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Match `import ... from "..."`, `export ... from "..."`, `import "..."`
  const regex = /((?:import|export)[^'"]*from\s*['"]|import\s*['"])([^'"]+)(['"])/g;
  
  const newContent = content.replace(regex, (match, p1, importPath, p3) => {
    if (importPath.startsWith('.') && !importPath.endsWith('.css')) {
      const absoluteImport = path.resolve(path.dirname(file), importPath);
      if (absoluteImport.startsWith(srcDir)) {
        let newPath = '@/' + path.relative(srcDir, absoluteImport).replace(/\\/g, '/');
        return p1 + newPath + p3;
      }
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${path.relative(srcDir, file)}`);
    totalUpdated++;
  }
});

console.log(`\nRefactoring complete. Updated ${totalUpdated} files.`);
