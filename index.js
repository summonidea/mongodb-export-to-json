const mongoose = require("mongoose");
const fs = require("fs");

mongoose.connect('mongodb+srv://<user>:<password>@<projectname>.twtxs.mongodb.net/<databasename>?retryWrites=true&w=majority')

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async function (){
    const collection = connection.db.collection("<collectionName>");
    collection.find({}).toArray(function (err, data){
        result = JSON.stringify(data);
        fs.writeFileSync('resultwritten.json', result)
        //console.log(JSON.stringify(data[0].elementTransferTypes[3]))
    });
});

