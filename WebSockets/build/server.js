"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PORT = 8080;
const wss = new ws_1.WebSocketServer({ port: PORT });
const allSockets = [];
let users = 0;
wss.on("connection", (s) => {
    console.log("user connected");
    users += 1;
    console.log(users);
    allSockets.push(s);
    s.on("message", (message) => {
        allSockets.forEach(s => (s.send(message.toString())));
    });
    s.on("close", () => {
        allSockets.filter(s => s != s);
        console.log("user disconnected.");
    });
});
