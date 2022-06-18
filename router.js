import express  from "express";
import SaldoController from "./controllers/SaldoController.js";

const Router = express.Router();

Router.get('/saldo', SaldoController.getAll)
Router.get('/saldo/:id', SaldoController.getid)
Router.post('/saldo', SaldoController.input)
Router.patch('/saldo/:id', SaldoController.update)
Router.delete('/saldo/:id', SaldoController.delete)


export default Router;