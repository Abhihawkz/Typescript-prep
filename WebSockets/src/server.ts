import { WebSocketServer } from "ws";


const PORT = 8080
const wss = new WebSocketServer({port:PORT});


wss.on("connection",(s)=>{
    console.log("WS connected");
    setInterval(()=>{
        s.send("hi")
    },1000)
    s.on("message",()=>{
        s.send("hello")
    })
})