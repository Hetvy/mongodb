var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var newTodo = new Todo({
        text : req.body.text
    });

    newTodo.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
        res.status(400).send(err);     
    });

});

app.get('/todos/:id',(req,res)=>{
    id = req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todos)=>{
        if(!todos){
            return res.status(404).send();
        }
        res.send({todos });
    }).catch((err)=>{
        res.status(400).send();
    });

});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(err)=>{
        res.send(err)
    });
});

app.listen(port,() => {
    console.log(`Started ${port}`);

});