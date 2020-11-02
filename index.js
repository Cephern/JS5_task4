const express = require("express");
const app = express();

app
  .use("/api", require("./api")(express))
  .get("/", (req, res) => {
    res
      .set({
        "Content-Type": "text/html; charset=utf-8",
      })
      .sendFile(__dirname + "/public/index.html");
  })
  .use("/static", express.static("public/static.pdf"))
  .use("/meme", express.static("public/meme.jpg"))
  .use((req, res) => {
    res
      .status(404)
      .set({ "Content-Type": "text/html; charset=utf-8" })
      .send("<h1>Не найдено :(</h1>");
  })
  .listen(8080, () => console.log(process.pid));
