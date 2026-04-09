const express = require("express");
const cors = require(`cors`);
const loginRoutes = require("./src/roots/loginRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀");
});
