import express from "express";
import http from "http";
import circuits from "./data/circuits.json" with { type: "json" };

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.status(200).json(circuits);
});

server.listen(80)