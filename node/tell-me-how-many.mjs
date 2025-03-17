import { readdir } from 'node:fs/promises';

const filePath = process.argv[2] || "."


try {
    const contents = await readdir(filePath);
    console.log(contents.length)
} catch (err) {
    console.error(err);
} 