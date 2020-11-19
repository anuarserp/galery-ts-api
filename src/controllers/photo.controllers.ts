import { request, RequestHandler, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export const getPhoto: RequestHandler = async (req, res): Promise<Response> => {
   const photo = await Photo.findById(req.params.id);
   return res.json(photo);
};

//obtener photos
export const getPhotos: RequestHandler = async (
   req,
   res
): Promise<Response> => {
   const photos = await Photo.find();
   return res.json(photos);
};

//guardar foto
export const createPhoto: RequestHandler = async (
   req,
   res
): Promise<Response> => {
   const newPhoto = {
      title: req.body.title,
      description: req.body.description,
      imagePath: req.file.path,
   };
   const photo = new Photo(newPhoto);
   await photo.save();

   return res.json({
      message: "Foto guardada satisfactoriamente",
      photo,
   });
};
//eliminar foto
export const deletePhoto: RequestHandler = async (
   req,
   res
): Promise<Response> => {
   const photo = await Photo.findByIdAndRemove(req.params.id);
   if (photo) {
      fs.unlink(path.resolve(photo.imagePath));
   } else {
      return res.status(400).json({ message: "Not Found" });
   }
   return res.json({ message: "ha sido eliminada", photo });
};
//actulizar el titulo y descripcion de una foto
export const updatePhoto: RequestHandler = async (
   req,
   res
): Promise<Response> => {
   const { title, description } = req.body;
   const updatePhoto = await Photo.findByIdAndUpdate(
      req.params.id,
      {
         title,
         description,
      },
      {
         new: true,
      }
   );
   if (!updatePhoto) return res.status(400).json({ message: "Not Found" });

   return res.json({ message: "Actualizada satisfactoriamente", updatePhoto });
};
