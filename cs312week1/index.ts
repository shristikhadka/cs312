import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, { Request, Response } from "express";

const server = express();
const port = 3000;

server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});

server.get(
  "/api/names",
  async function (_req: Request, res: Response): Promise<void> {
    try {
      const response = await routeAPINames();
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  }
);

server.get(
  "/api/weather/:zipcode",
  function (req: Request, res: Response): void {
    const zipcode = req.params.zipcode as string;
    const response = routeWeather({ zipcode });
    res.send(response);
  }
);

server.listen(port, function (): void {
  console.log("listening on " + port);
});
