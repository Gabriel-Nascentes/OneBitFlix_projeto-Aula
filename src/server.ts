import express from "express";
import { sequelize } from "./database/index";
import { adminJs, adminJsRouter } from "./adminjs/index";

const app = express();

app.use(express.static("public"));

// app.use('caminho',rotas)
app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await sequelize.authenticate().then(() => {
    console.log("DB connection successfull.");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
