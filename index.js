import express from "express"
const app = express()

let port = 3000

app.get("/" , (req , res)=>{
    res.send("<h1>maked by jajab </h1>")
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})