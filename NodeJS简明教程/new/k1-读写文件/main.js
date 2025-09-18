import { readFile,writeFile,appendFile} from 'node:fs/promises'

// const data = await readFile('./data.json', 'utf8')

// await writeFile('./data.json','some data', 'utf8')

await appendFile('./data.json','\nmore data', 'utf8')

// console.log(data)
