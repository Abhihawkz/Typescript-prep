"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const port = 8080;
const wss = new ws_1.WebSocketServer({ port: port });
wss.on("connection", (s) => {
    console.log("Web socket connection on");
    setInterval(() => {
        s.send("some polling response");
    }, 1000);
    s.on("message", (e) => {
        console.log(e.toString());
    });
});
