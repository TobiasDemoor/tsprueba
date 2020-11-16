import express from "express";
import config from "@config";
// Create a new express app instance
const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

function a(i: number): number {
    return i*2
}

console.log(a(config.getTyped("n")))

export default app
