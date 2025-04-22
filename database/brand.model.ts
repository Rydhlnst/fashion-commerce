import { model, models, Schema } from "mongoose";

export interface IBrand extends Document {
    name: string;
    logo?: string;
    description?: string;
    origin?: string;
  }
  
  const BrandSchema = new Schema<IBrand>({
    name: { type: String, required: true },
    logo: String,
    description: String,
    origin: String,
  });
  
  export const Brand = models?.Brand || model<IBrand>('Brand', BrandSchema);