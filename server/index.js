const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//=======================
app.use(express.static("./public"))
/*----tender html file----*/
app.get("/", function(req, res,next){
    res.sendFile('./public/index.html');
})
/*---------Get connection from client------------------------*/
io.on("connection", function(socket){
    console.log("client a connected");
    socket.emit("renderId", socket.id);
    socket.on("sendData", function(data){
        console.log(data);
        io.sockets.emit("renderData",data, socket.id);
    })
})

/*---------------- listen port----------------*/
server.listen(process.env.PORT, console.log("is connection"));