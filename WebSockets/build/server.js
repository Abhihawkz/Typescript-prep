"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PORT = 8080;
const wss = new ws_1.WebSocketServer({ port: PORT });
let users = 0;
const allUsers = [];
wss.on("connection", (s) => {
    s.on("message", (m) => {
        var _a;
        const parssedMessage = JSON.parse(m.toString());
        if (parssedMessage.type == "join") {
            allUsers.push({
                socket: s,
                roomId: parssedMessage.payload.roomId
            });
        }
        if (parssedMessage.type == "chat") {
            let curRoom = (_a = allUsers.find(x => x.socket == s)) === null || _a === void 0 ? void 0 : _a.roomId;
            console.log("Current Room :" + curRoom);
            allUsers.forEach(x => {
                if (x.roomId == curRoom) {
                    x.socket.send(parssedMessage.payload.message);
                }
            });
        }
    });
});
