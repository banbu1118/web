import express from 'express'
import { readFile } from 'fs/promises'

const app = express()
const port = 3000

app.get('/:name', async (req, res) => {
    //Get param from URL
    const idolName = req.params.name

    // Read data
    const idolDataText = await readFile('./data.json', 'utf-8');
    const idolData = JSON.parse(idolDataText);

    // Find matched data
    const resultIdol = idolData.find(
        (idol) => idol.name.toLowerCase() === idolName.toLowerCase()
    );

    if (!resultIdol) {
        return res.status(404).send('404 not found')
    }

    return res.status(200).json(resultIdol)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
