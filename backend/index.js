const express = require("express");

//Metodos HTTP: GET, POST, PUT, DELETE

//Query Params: req.query (Filtros, Ordenação, Paginação ...)
//Route Params: resques.params (Indentificar um recurso na alteraçao ou remoçao)
//Bobdy: request.body (Dados para criação ou alteração de um registro)

//mongoDB

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "hello world" });
});

app.listen(3333);
