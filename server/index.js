import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import axios from "axios"
const PORT=1000
const app=express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.get('/playlist',(req,res)=>{
   res.send(sites)
})

let sites = [];
app.post('/playlist', function (req, res) {
  
    const newSite = {
        id: req.body.id,
        title:req.body.title,
        original_title:req.body.original_title,
        overview:req.body.overview,
        runtime:req.body.runtime,
        vote_count:req.body.vote_count,
        backdrop_path:req.body.backdrop_path

    };
    sites.push(newSite);
    console.log(sites);
});

app.listen(PORT,()=>{
    console.log("Running on server 1000")
})