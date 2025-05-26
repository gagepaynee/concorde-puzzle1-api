import { WebSocket } from 'ws';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config()

const URL = `wss://${process.env.IP_ADDRESS}:${process.env.PORT}`

const socket = new WebSocket(URL, {
    ca: fs.readFileSync(process.env.CERTIFICATE_PATH)
});


socket.addEventListener('open', () => {
    // Send register event to the server with the generated id
    socket.send(JSON.stringify({ event: 'unlocked', id: 'z0na44j3' }));
});