const { response, request } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors("*"));

const routers = require("./routes/emp");
app.use("/emp", routers);
app.get("/", (request, response) => {
  response.send("welcome ");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("started on port 4000");
});
