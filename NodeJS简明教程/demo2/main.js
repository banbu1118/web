import { readFile, writeFile } from 'node:fs/promises'

// 读取文件内容
const data = await readFile('data.txt', 'utf-8')
const keychain = await readFile('keychain.txt', 'utf-8')


//解密数据
const leftdecryptedData = data
  .split('')
  .map((currentChar) => {
    const decryptedCharCode = currentChar.charCodeAt(0) - keychain
    return String.fromCharCode(decryptedCharCode)
  })
  .join('')

// 写入解密后的数据
await writeFile('decryptedData.txt', leftdecryptedData, 'utf-8')