import express from "express";
import cors from "cors";
import { collectDefaultMetrics, register } from 'prom-client';
const app = express();
const port = 3001;
app.use(cors());


collectDefaultMetrics();

let state: string = "Hi, I'm Echo. Say something so I can say it right back!";

app.post("/api/create-answer", (req, res) => {
  const data: string = req.body.data;
  if (!data || data.trim() === "") {
    res.status(400).json({ error: "No data provided" });
    return;
  }
  state = data;
  res
    .status(200)
    .json({ result: "Message received. The bell cannot be unrung" });
});

app.get("/api/get-answer", (req, res) => {
  if (!state || state.trim() === "") {
    res.status(400).json({ error: "No data provided" });
    return;
  }
  res.status(200).json({ result: state });
});

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

app.listen(port, "0.0.0.0", () => {
  return console.log(`Express is listening at http://0.0.0.0:${port}`);
});
