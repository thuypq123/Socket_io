var chatbox = document.querySelector("#chatbox");
var welcome = document.querySelector("#welcome");

sendData = () => {
    var value = document.getElementById("text_chat");
    socket.emit("sendData", value.value);
    value.value = "";
}

socket.on("renderData",function(data, id){
    var pdata = document.createElement("p");
    id = id.slice(0,5);
    var node = document.createTextNode(id +" : "+data);
    pdata.appendChild(node);
    chatbox.appendChild(pdata);
})

socket.on("renderId", function(id){
    console.log(id)
    id = id.slice(0,5);
    var pId = document.createElement("p");
    var node = document.createTextNode(id);
    pId.appendChild(node);
    welcome.appendChild(pId);
})

/*-------------------Even click Front-end----------*/
