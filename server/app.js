const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://sagar:test123@cluster0-qrrtg.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () =>{
    console.log('Database started!');
});

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000,()=>{
    console.log("Server started at port 4000");
});