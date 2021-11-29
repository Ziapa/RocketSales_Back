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
        code: "def502008c138616c77f0d97c9162580f70faa5a1f7bff9bc865ed4112f23c92a569c89972406fda6b99733d730d11919042a465c843ae31757783d3a2fe223a270cb72b404e3e8af9dd37c714258c6d720ef2230d8a3aa778c812bb04e4b6f499348b0efec5531b13ab26bd3a0dcbe2c4dc0968d3b5de4394019267984872220120c22ec1368901a581af76858b39c362430973f598ac79b69883cbe06f477ebcf07b89917d546c885bf9ccb61303711fafce65d872accbaad885a2a6168fea7c6e10e9e015caa1ef999137cea8ac0116629e2a774f0530bf1f3a58dafc90064f28d5bd5dca5605669c54ee2f48f9323a060adadf71830ef0ca254358564afec3584c122305ea037f67c5065ef5edc38359df8a99d9f89db929c83686c9cd5ce0e43dccd75876624ba9202ccd3d8a57da1309537a035b56b40cb96cd29c8396fb1ea0dd1b1ef90cdaf7a7ee658d0942e58b3b64036fc15133d03de89abf2e0092ded6a527a894d3075e2003d04d3fe6b579c395ea2ec834454a536912a2ccf5b7b848e3301d4920d450e67d04ecdd0df10088a2a7a7a9423e2180e2bbc0fc700b539478e8af46c754448af707471acdad8e31c9c9829a594f4b6badf4a236b907b96b46076d937c7d55d38273"
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