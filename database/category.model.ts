import { model, models, Schema } from "mongoose";

export interface ICategory extends Document {
    name: string;
    slug: string;
    image?: string;
    description?: string;
  }
  
  const CategorySchema = new Schema<ICategory>({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: String,
    description: String,
  });
  
  export const Category = models?.Category || model<ICategory>('Category', CategorySchema);