import { Schema, model, Document } from "mongoose";

export interface IPhoto extends Document {
   title: string;
   description: string;
   imagePath: string;
}

const photo = new Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },
      description: {
         type: String,
         trim: true,
      },
      imagePath: {
         type: String,
         required: true,
         unique: true,
      },
   },
   {
      versionKey: false,
      timestamps: true,
   }
);

export default model<IPhoto>("Photo", photo);
