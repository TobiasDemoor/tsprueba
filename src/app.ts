import app from "./server"
import config from "@config"

const port: number = config.get("port")

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
