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
        code: "def5020036ad21722902af4654ad68c1480b5147a7d3ee8f9960b3869984f5c1196a2607c1812cc4b3d6ce528ef40542d9d51dd128955edc971a6d3a4d8ea20e686deec1278d020922eea0a2ea0b3d80350af0c88ad338ab7b4250f0d45b8ea38dfd534f52d486907a1188624828c7b4bef82217b1d8a07937d34f2c6f3b95c8d2aa4ecdab5217a3bc1e55b26059de06d83c7ab883e4dcaf066197f1adda8fd7c5b591141d53dc7abfab1c04ca613ad83d1ccf0f06b9541635ce88a9a7e2d07ca10ca27cdaa31e6237b097a73f28f391455bf1a357cc77c00baf688ce28c9b6dad33f5797a4200ee94aa90b8fdbc966a530e487e79e6bebc715a95393a4088fda01ac227f853c1dc0d6077aa99acdafa442f4b0d28ea6d248e0155d71f7dc07fc52c2a3812787ad616ab2e6564239ed6c7d3e223a37a3afe594010835c41b6836e86c9391124e67f23d9342754e2b85d1a808ce74fc6d79af07667afb2ef310981f377f736bfc556f61dc43b1ae3e7d46f4406a1aeb28a9dafba922ee4542b2ccd99e71d0b2d014323aa405676ce6b7a5c8fb3d741d5a4523c605d1731fb3cd241e05f5cd7343758681c6afb2bf6faf5001e505f43a464cb4b7185c8fdf03385715ea2796272512d755868aa8d"
    },

});


app.get("/", async (req, res) => {
    const response = await crm.request('GET', '/api/v4/leads');

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
