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
        code: "def502008ed559f9278615436c69d61af6a0c8f5042edb3640f800bc623fb1a7142b2cb520f62dcd35d4005303f447b88ca106e4ad15ad398a67ca9328721dd844458f067b009f5305e43ca8e4ecddf0e88cefb174a0a08488edd31efa5fa925303d86bdaf34ca95c496ea7feeb0d7cb86ba999bd9013c910814cfa7d9b9243b319d06f64e3f67cd5a78bdd79aa315c850974677a91fde6219819acacc85f48882e29e3a507747fddc4a4c0c6f2ded5ab45fdd04e56de97c6dd6d519ba84826c9ad122211a781be4011954303295be0f6ff7d511123592f1c215c54ad161f58040d17ae40c4c65bce7c6af4a5bdf639ad07695e892b7c9a0b9a348970bf5d3502a3bf196f5e6ee8a8bbf5ae7108a86c3ddef3643424b083c36cd8c58e6e1baf6df8fb0a9c53b92b24789aff80519e2d37c7727a341239f8059daceeae2e16f52735388905c76b3d2f3db7bac0db477ff50bb36708ca8c82f8c0a9fa94fc497e8192f0bdebe8229f5bfb739bc77dc63697b7a87faaf38b0907b1951ac2d9ae411b2061b75d274da658aeadfba62b7445b9c6c16da4b3668bbfb00b6dfab06add5d1790bdbc28f4e78d3052445194bcbfc79dc43bcfe7ee12e411ef004502e3968c2115215db68173e7f147e9eec"
    },

});


app.get("/", async (req, res) => {
    res.json("work)
})

app.get("/leads", async (req, res) => {
    const response = await crm.request('GET', '/api/v4/leads');

    res.json(response.data)
})

app.get("/leads:id", async (req, res) => {
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
