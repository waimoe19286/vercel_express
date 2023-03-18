import express, { Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import bodyParser from "body-parser"; //post ကနေ data လိုချင်ရင်သုံးတာ
import formidable from "formidable"; // ပုံတွေကိုတစ်ပုံထက်ပို save ချင်ရင်သုံးတာ
import { v4 as uuidv4 } from "uuid"; // redom  string လိုချင်လို့ သုံးတာ
const app = express();
dotenv.config();
const port = 3155;
const apiUrl = process.env.API_URL;

app.use(express.static("public"));
app.use(bodyParser.json());
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

app.post("/api/fileupload", (req: Request, res: Response) => {
  const idwai = uuidv4();
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      return res.end(String(err));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ fields, files }, null, 2));
  });
  // console.log(req.headers);
  // const writeStream = fs.createWriteStream("./test.jpg");
  // req.pipe(writeStream);
  // res.end();
});

app.listen(3155, () => {
  console.log("Sever listen ", port);
});
