import { WebSocket, WebSocketServer } from "ws";

const PORT = 8080;
const wss = new WebSocketServer({port:PORT})

let users = 0;
interface User {
    socket:WebSocket,
    roomId:string
}

const allUsers : User[] = [];

wss.on("connection",(s)=>{
    s.on("message",(m)=>{
        const parssedMessage = JSON.parse(m.toString());
        if(parssedMessage.type == "join"){
            allUsers.push({
                socket:s,
                roomId:parssedMessage.payload.roomId
            })
        }

        if(parssedMessage.type == "chat"){
            let curRoom = allUsers.find(x => x.socket == s)?.roomId;
            console.log("Current Room :"+curRoom);
            allUsers.forEach(x => {
                if(x.roomId == curRoom){
                    x.socket.send(parssedMessage.payload.message)
                }
            })
        }
    })
})