const express = require('express')
const router= require('./routes')
const morgan = require('morgan')
const app = express()
const PORT = 3000

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(morgan('dev'))

app.use('/',router)

app.use((req,res)=>{
    res.status(404).send(`Not Found`)
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send(`something wrong!`)
})
app.listen(PORT, () =>{ 
    console.log(`App is running on port ${PORT}`)
})