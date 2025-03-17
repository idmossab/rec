import { writeFile } from 'node:fs/promises';
import { result } from './verydisco.mjs';

 await writeFile('verydisco-forever.txt', result);