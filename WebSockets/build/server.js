"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PORT = 8080;
const wss = new ws_1.WebSocketServer({ port: PORT });
wss.on("connection", (s) => {
    console.log("WS connected");
    setInterval(() => {
        s.send("hi");
    }, 1000);
    s.on("message", () => {
        s.send("hello");
    });
});
