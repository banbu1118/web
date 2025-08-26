// import { readFile, } from 'node:fs/promises'
import { readFile } from 'node:fs'

await readFile('./data.json', 'utf8',(err,data)=>{
    if(err){
        console.log(err.message);
        
    }

    console.log(data);
})

// console.log(kk)