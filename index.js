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
        code: "def50200718e5c4957d82ec74c2aac8c130f383e27efe93693c0ccdc0f05924de0e186cdfd62894811a9e7779578832cfa7814e476bd3a47d34fd645d10ff73163d856bf84916626b0a32a9597704a490264db8386937abea9b653c1a5032d8315eeef19c45fc1bb293b662a710082295921a2819cd66fe05121e6bdadaeeb14d1f08f7ea0613de755de4ff02cb46fdd84c608d1eaf795c795503b6f543d738dc95a56776e504e7abf09082aef874b08ca4473e3748f4be7277cbb8148964243e8ecaf5577432a8a6df5dd20dd0cb72260c1c37ea3e36dba39b90d74e484810e9418791a9f81a4c7a8aa7e3149abdb8953bc1279f169cef9a5c233bfd2d0ded7488f762cf7803d1a022f3504efe05f4bd4b976184ef933f14afdf81d1258502d7f2776a8b7e1420804a2fb42a5e0b9c35397eb9a9e07f476484faf2b35635a4b9a67b3f5dc81558f6c880066fd2c13374e63c1176bf32e86a90aac157d2811316ac27467224aa4e23ebc97a9a32e87da06ea1fdb9d72abb30fc50ff2aab225bc1d7420245993074bd284e1734c7d57ae1314953480755b63ea06337d6b8f928e591e646132f75787ed53c49ced63b474dbbbce86ec9449165edfef87077afac8a72e7f8e077f7987754f1e13ef"
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