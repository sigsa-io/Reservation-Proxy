var express = require("express");
var app = express();

app.get('/app1',function(req,res) {
    res.send("Hello world From Server 1");
});

app.get('/app2',function(req,res) {
    res.send("Hello world From Server 2");
});

app.get('/app3',function(req,res) {
    res.send("Hello world From Server 3");
});

app.listen(8001);
console.log('listening to 8001');
app.listen(8002);
console.log('listening to 8002');
app.listen(8003);
console.log('listening to 8003');
