import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { createHandler } from "graphql-http/lib/use/express";
import { schema, rootValue } from "./graphql";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue,
  })
);

app.get("/graphiql", (req: Request, res: Response) => {
  const html = fs.readFileSync(path.join(__dirname, "graphiql.html"), "utf8");
  res.send(html);
});

app.listen(4000, () => {
  console.log("🚀 GraphQL server running:");
  console.log("➡ POST endpoint: http://localhost:4000/graphql");
  console.log("➡ UI: http://localhost:4000/graphiql");
});
