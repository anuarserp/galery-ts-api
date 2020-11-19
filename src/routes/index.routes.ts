import { Router } from "express";
import * as photoCtrl from "../controllers/photo.controllers";
import multer from "../libs/multer";
const router = Router();

//obtener fotos
router.get("/photos", photoCtrl.getPhotos);
//obtener una foto
router.get("/photos/:id", photoCtrl.getPhoto);
//guardar foto
router.post("/photos", multer.single("image"), photoCtrl.createPhoto);
//eliminar foto
router.delete("/photos/:id", photoCtrl.deletePhoto);
//actualizar foto
router.put("/photos/:id", photoCtrl.updatePhoto);

export default router;
