import express, {Application, Request, Response} from "express";
import config from "@config";
import PruebaModel from "model";
// Create a new express app instance
const app: Application = express();

app.get("/", (req: Request<{}, {}, PruebaModel>, res) => {
    res.send(req.body.n);
});

function a(i: number): number {
    return i*2
}

console.log(a(config.getTyped("n")))

export default app
