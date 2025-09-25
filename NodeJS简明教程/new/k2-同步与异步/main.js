// import { readFile} from 'node:fs/promises'
import { readFile as readFileAsync } from 'node:fs'

// const data_1 = await readFile('./data.json', 'utf8')
readFileAsync('./data.json', 'utf8', (err, data) => {
if(err){
    console.log(err.message); 
}
console.log(data);

})

// console.log(data_1)