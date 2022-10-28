const express=require('express')
const app=express();
const dbConnect=require('./dbConnect.js')

app.use(express.json())

app.get('/',async (req,res)=>{
    console.log(req.body);
    let collection=await dbConnect();
    let data=await collection.find().toArray();
    res.send(data)
})

app.post('/',async (req,res)=>{
    console.log(req.body);
    let collection=await dbConnect();
    let data=await collection.insert(req.body);
    res.send(data)
})

app.put('/',async (req,res)=>{
    console.log(req.body);
    let collection=await dbConnect();
    let data=await collection.updateOne(
        {name:'Sharp'},
        {$set:req.body}
    );
    res.send(data)
})

app.delete('/',async  (req,res)=>{
    console.log(req.body);
    let collection=await dbConnect();
    let data=await collection.deleteMany({name:req.body.name});
    res.send(data)
})

app.listen(4000)