const mongoose = require('mongoose')

const host = 'localhost'
const port = 27017
const db = 'srt_url'

const connection = mongoose.connect(`mongodb://${host}:${port}/${db}`)
module.exports = connection
