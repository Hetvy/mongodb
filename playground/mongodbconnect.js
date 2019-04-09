const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect");
    }
    console.log("Connected");

    // db.collection('Todos').insertOne({
    //     text: 'hie',
    //     complected:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("not inserted");
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
        
    // });

        // db.collection('Users').insertOne({
        //     name: 'hetvy',
        //     age:21,
        //     location:'Rajkot'
        // },(err,result)=>{
        //     if (err) {
        //         return  console.log("not inserted");
            
        //     }
        //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
            
        // });

    db.close();
});
