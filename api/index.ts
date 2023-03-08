import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = 3000;
const apiUrl = process.env.API_URL;
console.log(process.env);
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

app.get("/api/user", (req: Request, res: Response) => {
  res.send({ name: "user1", email: "user1@gmail.com" });
});

app.listen(3000, () => {
  console.log("Sever listen ", port);
});
