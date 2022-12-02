const express  = require('express')
const mongoose =  require('mongoose')


require('dotenv').config()


async function main() {
    console.log("connecting to mongodb...");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.")

    const app = express()

    app.use(express.json())

    app.use('/api/products', require("./api/products/product.routes"))

    app.listen(4000, () => console.log('server started at 4000'))

}

main()