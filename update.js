const dbConnect=require('./dbConnect.js')

async function update(){
    let collection=await dbConnect();
    let result=await collection.updateOne(
        //first object is for specifying the condition
        {name:'baja'},
        //What you want to set
        {
            $set:{name:'bajaj'}
        }
    )
    console.log(result);
}

update();