const path = require('path');
const fs = require('fs');

const cacheDirPath = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rmSync(cacheDirPath, { recursive: true, force: true });

console.log('\x1b[32m%s\x1b[0m', 'info =>', 'CLEAR-CACHE');
