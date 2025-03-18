import { readFile } from 'node:fs/promises';

const path = process.argv[2]

const files = await readFile(path, 'utf8');
const verydisco = (word) => {
    let mid = word.length / 2
    let last = word.slice(mid)
    let first = word.slice(0, mid)
    return last + first
}
console.log((files.split(" ").map((e) => verydisco(e)).join(" ")));
