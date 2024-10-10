import express from "express";
import { configureDependencies } from "../infrastructure/utils/config";
import { connectDB } from "../infrastructure/database/mongo-db/connection";

const app = express();
connectDB();
app.use(express.json());

//instancia de dependencias e rota aqui
const { bookController, userController } = configureDependencies();
app.post("/books", (req, res) => bookController.create(req, res));
app.get("/books", (req, res) => bookController.listAll(req, res));
app.patch("/book/:id", (req, res) => bookController.update(req, res));
app.delete("/book/:id", (req, res) => bookController.delete(req, res));
app.post("/user", (req, res) => userController.create(req, res));
app.get("/user/:email", (req, res) => userController.getUserByEmail(req, res));

if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
