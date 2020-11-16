import express from "express";
// Create a new express app instance
const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

function a(i: number): number {
    return i*2
}

export default app
