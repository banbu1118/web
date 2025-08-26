/*
  1. Read files
  2. Decrypt data
  3. Write it into a new file
*/

import fs from 'fs'

// Step 1: Read files
const data = await fs.promises.readFile('data.txt', 'utf8')
const keychain = await fs.promises.readFile('keychain.txt', 'utf8')

// Step 2: Decrypt data
const leftMoveDecryptedData = data
  .split("")                         // 把整段文本拆成一个个字符
  .map((currentChar) => {            // 对每个字符做映射
    const decryptedCharCode = currentChar.charCodeAt(0) - keychain
    return String.fromCharCode(decryptedCharCode)
  })
  .join("")                          // 再拼回成字符串

// console.log(leftMoveDecryptedData);


// Step 3: Write it into a new file
await fs.promises.writeFile('decryptedData.txt', leftMoveDecryptedData, 'utf8')