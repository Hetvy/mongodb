const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected");

    db.collection('Todos').find({
        _id: new ObjectID('5caaf399bd0cbc28a80b2ffa')
    }).toArray().then((docs)=>{
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2))   
    },(err)=>{
        console.log("Not able to find",err);
        
    })

    //db.close();
});
