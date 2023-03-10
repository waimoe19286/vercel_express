import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = 3000;
const apiUrl = process.env.API_URL;

app.use(express.static("public"));

const html = `
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <script type="text/javascript">
    localStorage.setItem("apiUrl","${apiUrl}")
    window.location.href="/"
    </script>
  </body>
</html>`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send(JSON.stringify({ name: "waimoe", age: "wai" }));
});
app.listen(3000, () => {
  console.log("Sever listen ", port);
});
