import { promisify } from 'util';
import { readdir, writeFile } from 'fs';
import { relative, joinPath } from 'path';

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

// eslint-disable-next-line no-undef
const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    joinPath(lokiDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    })
  );
})();
