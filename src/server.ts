import express, { Express, Request, Response } from "express";

const app: Express = express();

const port = process.env.PORT || 4000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello there from express");
});

app.listen(port, () =>
  console.log(`🚀 Server listening on port http://localhost:${port}/`)
);
