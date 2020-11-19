import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import indexRoutes from "./routes/index.routes";
import config from "./config/config";
//inicializacion
const app = express();

//configuraciones
app.set("port", config.PORT);
//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.get("/", (req, res) => {
   return res.send(`la Api en  http://localhost:${app.get("port")}`);
});
app.use(indexRoutes);

//almacenar archivos publicos
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
