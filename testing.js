var express = require("express")
var app= express()
var router = express.Router()

// not compulsory
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
//....end not compulsory

router.get("/testingrouter", (req,res)=>
{res.send("Hellow worlds")})


app.use('/',router)

app.listen(8082,()=>{
    console.log("listening at port 8082")
})
