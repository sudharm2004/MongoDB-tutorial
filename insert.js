const dbConnect = require('./dbConnect.js')
async function insert() {
    let collection = await dbConnect();
    let result = await collection.insertMany(
    [
        {
            "name": "nvidia",
            "prize": 68000,
            "available": false
        },
        {
            "name": "accenture",
            "prize": 456000,
            "available": false
        },
        {
            "name": "baja",
            "prize": 966000,
            "available": false
        }
    ]
    )
    console.log(result);
}

insert();