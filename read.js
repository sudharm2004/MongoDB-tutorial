const dbConnect=require('./dbConnect.js')
async function read(){
    let collection= await dbConnect();
    let data=await collection.find({name:'asus'}).toArray();
    console.log(data);
}
 read();