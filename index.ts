import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { ValidationError, handleError } from "./utils/errors";
import { error } from "console";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(json());

// Routes...

// app.get("/", async (req, res) => {
//   throw new ValidationError("Dammm!");
// });

app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on port http://localhost:3001");
});
