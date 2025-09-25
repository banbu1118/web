/*
  1. Read files
  2. Decrypt data
  3. Write it into a new file
*/

import { readFile, writeFile } from 'node:fs/promises';

// Step 1: Read files
const data = await readFile('./data.txt', 'utf8');

const keychain = await readFile('./keychain.txt', 'utf8');

// Step 2: Decrypt data
const leftMoveDecryptedData = data.split('').map((currentChar) => {
  const DecryptedCharCode = currentChar.charCodeAt(0) - keychain
  return String.fromCharCode(DecryptedCharCode)
}).join('');


// Step 3: Write it into a new file
await writeFile('./decryptedData.txt', leftMoveDecryptedData, 'utf8');