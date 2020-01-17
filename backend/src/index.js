const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://oministack:oministack@cluster0-84iwy.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);
app.listen(3333);

//Metodos HTTP: GET, POST, PUT, DELETE

//Query Params: req.query (Filtros, Ordenação, Paginação ...)
//Route Params: resques.params (Indentificar um recurso na alteraçao ou remoçao)
//Bobdy: request.body (Dados para criação ou alteração de um registro)

//mongoDB (Não Relacional)
