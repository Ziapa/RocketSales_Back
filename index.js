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
        code: "def50200ef898244e29ad9086da4831d06467f47521f50c39d7019c8a75391ffe64fa7949f78276a511d931cf45b560953ae3ee04960f1f12b3ca03d42d0b51244cf795f2a50aa734c7c4fc1230fefed006dbf3e2fd893d5cb46f550f24f30e0465760ad613a26ae6e9ab52c208def4ffcf76252616371c2b06dc16859c95fce7064c9a424e118742168f2867f3e9933eaafbf1de03402922f24c0299d7760df391bb80b971ea5f07e2b049b6c5243f64f5a9cc118ad50d60962cf330ce9a7d9ac215c5440bca5daad813aee4722344c520b42427d2bd127e6ee6f0ba8130f5093e13333cdbfeba1ca090dbdb0ea22e982c3cf8ae848e0a20567ca048444356ff3d4b3149defe332e7f78a838ec96ceb452690939964afa5674ba5fc68a4b96c89afa2dcb980cb520de0c65b98a8b154294e41e8bd00859fb999c0129abe7d80b0e88862aab15ae4ca31cf7d7ce8d6ea5d6e1c764b57abec34771ec3df13395faace0d874ffeb4e2cbfa0bf0ecb8dc5d1cd1ffa67cdcc44d9b808e03553d40ac27621c32de94abae2367278bd2ca33eabcf21be0a66c8667012cdbd3a8405df2ea322592fd03f7a0b12cf6ed6fecd52525f0ba2579c73fa8a01d6dca8789bf73f17ee1711ce4ae197bff8fddcc"
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
