import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("Hello World");
});

export default indexRouter;