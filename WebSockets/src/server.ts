import { WebSocket, WebSocketServer } from "ws";


const PORT = 8080
const wss = new WebSocketServer({port:PORT});

const allSockets : WebSocket[] = [];

wss.on("connection",(s)=>{
    console.log("user connected");
    users+=1;
    console.log(users);
    
    allSockets.push(s);

    s.on("message",(message)=>{
        allSockets.forEach(s => (s.send(message.toString())))
    })

    s.on("close",()=>{
        allSockets.filter(s => s!=s)
        console.log("user disconnected.")
    })

})