const config = require("./utils/config");
const express = require("express");

const app = express();

app.listen(config.PORT, () => {
  console.log(`server listening on port ${config.PORT}`);
});
