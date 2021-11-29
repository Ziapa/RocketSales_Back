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
        code: "def502007e72fd93592d59138940fc2791ca5d2ffd312eee4b76fc74771c636fcca512f044f6cd226e60763bdbc35cbdf9baacbfe22167aca937f58d87d064ebcec62d1f18b894e8000ed279f1240f9496edb5a8b0992576f6e9866437ce825892cc27125665c31dc684e6bb6b417c00fcafc28aa4e00b086fa8c1d4ad7aff5a2bce4597bbea76d76beeab9d0a340b7cdc33e15e81c9a9e74d8f0a59afb7a73fd5707e55641ec1686d4b1c2ff2cfc00099831f009c071bf75ece8bf37afc1c4bb67bfe8bb120d2b1eb4a2b0ac3acf21726998511aefaef1c29de784ef735c05825a1d55c4bd3ab41ae5bd36997ce9ec6e59e1bbb74908bce517d8c50bb9b4fefdb2697ac61528f54197709ec39209b6e3820c323855cfb37e865647c2040952b887a6945b4d94354d601585d88d6c0cfabd8db29ef2bfd319970805ed6802a1585822315bd0ac77411b294375493e077c3236d9430b7d0da9aa8b065fb4d53d7769c6b8e3fcecb2a417e76cedb88d6d0fabf98563f2b9977e51bf0a3bef3f0c9fa252e9ecf978a5db3ae10facd415976f146e805a3e8b6c1c9bae9d0a2d3ed57b0c900a9933fffbf2762d5407c3daff8ac10ff165c446991272cf0b94429183c0e6ffb4dd16eceef26210aff2f"
    },

});


app.get("/leads", async (req, res) => {
    const response = await crm.request('GET', '/api/v4/leads');

    res.json(response.data)
})

app.get("/leads/:id", async (req, res) => {
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