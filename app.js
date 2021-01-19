const express = require("express");
const bodyparser=require("body-parser");
const arithmetic_operations = require("./arithmetic_operations");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("",(request,response) => response.sendFile(__dirname + "/index.html"));
app.post("/",(request,response) =>
{
    const numbers = request.body.num.map(Number);
    if(request.body.add)
    {
        response.send("Result is " + arithmetic_operations.add(numbers));
    }
    else if(request.body.substract)
    {
        response.send("Result is " + arithmetic_operations.substract(numbers));
    }
    else if(request.body.multiply)
    {
        response.send("Result is " + arithmetic_operations.multiply(numbers));
    }
    else if(request.body.divide)
    {
        response.send("Result is " + arithmetic_operations.divide(numbers));
    }
    else
    {
        response.send("Error!");
    }
    
});

app.listen(9000, (response)=>console.log("server started at port 9000"));