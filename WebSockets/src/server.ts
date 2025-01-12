import { WebSocketServer } from "ws";

const port = 8080;

const wss = new WebSocketServer({port:port})

wss.on("connection",(s)=>{
    console.log("Web socket connection on");
    setInterval(()=>{
        s.send("some polling response")
    },1000)

    s.on("message",(e)=>{
        console.log(e.toString())
    })
})