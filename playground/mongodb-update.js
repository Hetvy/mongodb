const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected");

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5caaef910af51b0917463c74")
    },{
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
        
    })
    //db.close();
});
