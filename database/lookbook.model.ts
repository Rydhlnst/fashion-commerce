import { model, models, Schema, Types } from "mongoose";

export interface ILookbook extends Document{
    title: string;
    slug: string;
    image: string[];
    description?: string;
    relatedProducts: Types.ObjectId[];
  }
  
  const LookbookSchema = new Schema<ILookbook>({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: [String],
    description: String,
    relatedProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  });
  
  export const Lookbook = models?.Lookbook || model<ILookbook & Document>('Lookbook', LookbookSchema);
  