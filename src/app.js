import express from "express";
import fileRouter from "./routes/router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", fileRouter);

app.listen(port, () => {
  console.log("servidor RUN on port 3000 ");
});
