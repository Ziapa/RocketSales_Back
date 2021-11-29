const express = require("express")
const AmoCRM = require("amocrm-js")
const PORT = 5000
const cors = require('cors')


const app = express()
app.use(cors())

const crm = new AmoCRM({
    domain: 'ziapa',
    auth: {
        client_id: 'ea6e99be-6e54-401c-98b3-123169b5345c',
        client_secret: 'mj21Q5oHVoWy6jpxlu3PwFl0gEXbVKNibAUUvm7v5gqDju2xJsTZPJpxyn1ABXng',
        redirect_uri: 'https://0cd3-5-145-252-223.ngrok.io',
        code: "def5020079168f72740c953630e0d9b60e707919ac16ec7e5152d5b94c4d6c95df6ae9d8cc1419aeb9515573635471894a9f2f10a67323ed1882e78a687c93a2fec5450a6ee95c12b6f27275fd47f01ef60d4cb61d3a3f5f590348b4cd552951edb0ad5265e130bc6131d7b8fc045c0bd5b0994ed810990a32918282b3bc6c237dc84500efa214df54e8cec4a001c12c14224a4c2ac7ccd1c6061ee9c36b4d55f9ddef475fd5466f18faa2f661b162f525b0e5b80259f59b444d82ec6109289cb9bcf0e5f1583031a5bad8230335bc33322d4ab6d55643c23742215303c611b5cf59ea45dad2049ba6f5ae2413635c9cf7c021c9e5ab0dba2c8b5781ee19b097afd0322476e14dcbb9c8545bb422dbc1efeb0f615f4a177b7aa4b76201fb72b9d6714c96d66232859e6fd779a11ba2f65b9e01306a47771fb7dd636dd9e8457c951ec9604388ddda389e7f7a2f33f95acc52923bc8f483a350610c4fa0d2dc4a71e54c8134c6bed2691943a6facadf6c5fbcb31420bd4b31c9653cb5612250c81d0d521aad3f9e07c4a61e0a45aed8569738470fdf915adf22a88ba5a9a7bb4f28170adb3e32280747452d58b22199d1506f6a210e7dda5e67a8dd8dd9cd683c355dfce27cbf27b52d0ee05f8c"
    },

});


app.get("/", async (req, res) => {
    const response = await crm.request('GET', '/api/v4/leads');

    res.json("work")
    res.json(response.data)
})

app.get("/:id", async (req, res) => {
    const response = await crm.request('GET', `/api/v4/leads?query=${req.params.id}`);

    res.json(response.data)
})

async function startApp() {
    try {
        app.listen(PORT, () => {
            console.log(`Server start: http://localhost:${PORT}/`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()