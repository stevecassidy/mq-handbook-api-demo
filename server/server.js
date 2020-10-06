/**
 * A Gateway server for the CMS API
 * 
 * Requests are forwarded to the primary API using 
 * one set of credentials. 
 */
require('dotenv').config()

const express = require('express') 
const cors = require('cors')
const gatewayRouter = require("./controllers/gateway")

const app = express() 
app.use(cors())
app.use(express.json()) 
app.use(express.static('build'))
app.use(gatewayRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})