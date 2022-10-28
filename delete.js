const dbConnect=require('./dbConnect.js')

async function deleteRecord(){
    let collection=await dbConnect();
    let result=await collection.deleteOne({prize:45000})
    console.log(result);
}

deleteRecord();