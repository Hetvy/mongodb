const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected");

    db.collection('Users').deleteOne({name:'hetvy'}).then((result)=>{
        console.log(result);    
    });

    //db.close();
});
