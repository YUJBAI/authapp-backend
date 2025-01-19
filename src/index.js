//const authRouter = require("./routes/auth.router");
const v1Router = require("./routes");
const config = require("./utils/config");
const express = require("express");

const app = express();

//app.use("/auth", authRouter);
app.use("/v1", v1Router);

app.listen(config.PORT, () => {
  console.log(`server listening on port ${config.PORT}`);
});
