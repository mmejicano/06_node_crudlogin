import express from "express";
import morgan from "morgan";
import cors from "cors";
import usersRoutes from "../routes/users.js";
import authRoutes from "../routes/auth.js";
import { dbConnection } from "../database/config.js";


export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usersPath = "/api/users";
    this.authPath = "/api/auth";

    // conectar a db
    this.conectarDB()

    // middlewares
    this.middlewares();

    //routes
    this.routes();
  }

  async conectarDB(){
    await dbConnection()
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({extended: true}));
    //this.app.use(express.json()); // para API
  }

  routes() {
    this.app.use(this.usersPath, usersRoutes);
    this.app.use(this.authPath, authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`);
    });
  }
}
