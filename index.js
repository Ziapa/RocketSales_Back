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
        code: "def50200e30fb93b173ef18ab012e5b5d152a72095bba0200c4d63c39ca156a0db039a9ea0bb697f4b3630a757263899fdfdfc3a38e5df6de8a6cddb1791ebc380c46d9fb6573c86bc373129ff1de6261c1e8456072ea1b1bc2e66e076476cff4addb7421bc8806fa33f142f793a7530b521d6383e1f9cb1ced524dfed2d53831113066a681cffca26843a5e570d527f22e6fed17abdc37f14b66627d1622508148a2b49205abfe42ddedab5cf88eb682dca61671f70a816ade1edc2206c89953322ec26c8ac147fd872aa5d57e4f274312228cd2321fe96202fbe2f844aa8ccd22b79954c228dd09011ae924cf66fe60012ee8e970aacce39535216155a539bfafdf2b45df76a508296791471fe1f2e3e9d72fd9d74e754fc6d79fdd34eb709ba48da4aa06adea9f84dfd406fe5dea298dfb9cbfe9b4b026969fbef024abbf587856cff27ff3946a12488cc7e30289c947cba6465fee21f85add8e06310e9c2e4f05a14bd891481dd22a905669187a98ec1135316ed650ad71b106cc89f83818c25b62628d4ce2ccad7447019fe909a416c1b39d189242604461c87de6f42624f620ef4027d45beb39556c2c03cef5a1b741325c1f18fe35408394f8c51a4c2c376826f6db08445c66b439f09"
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