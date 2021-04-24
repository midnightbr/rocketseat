import express from "express";

const app = express();

/**
 * GET = BUSCAS
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO
 * DELETE - DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO ESPECIFICA
 */

// Retornando sem usar o JSON
// app.get("/", (request, response) => {
//   return response.send("Olá NLW #05");
// });

// Retornando em JSON
app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW #05",
  });
});

app.post("/users", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));