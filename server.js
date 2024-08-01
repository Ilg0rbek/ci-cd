const express = require("express");

const app = express();

const PORT = 9321;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.get("/", (req, res) => {
  res.send({
    status: "Ok",
    code: 200,
  });
});
