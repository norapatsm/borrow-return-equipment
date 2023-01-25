const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('้hello')
})

app.get('/home',(req,res) =>{
    res.sendFile(__dirname+"/public/First_page.html")
})
app.get('/about',(req,res) =>{
    res.sendFile(__dirname+"/public/workshop3_about.html")
})
app.get('/product',(req,res) =>{
    res.sendFile(__dirname+"/public/workshop3_product.html")
})
app.get('/notebook1.jpg',(req,res) =>{
    res.sendFile(__dirname+"/static/notebook1.jpg")
})
app.get('/notebook2.jpg',(req,res) =>{
    res.sendFile(__dirname+"/static/notebook2.jpg")
})
app.get('/notebook3.jpg',(req,res) =>{
    res.sendFile(__dirname+"/static/notebook3.jpg")
})
app.get('/productcss.css',(req,res) =>{
    res.sendFile(__dirname+"/public/productcss.css")
})
app.get('/style.css',(req,res) =>{
    res.sendFile(__dirname+"/public/style.css")
})




app.get('*',(req,res) =>{
    res.sendFile(__dirname+"/static/404_notfound.jpg")
})


app.listen(1001,() =>{
    console.log("startserver at port[3000]")
})