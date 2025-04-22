import { model, models, Schema, Types } from "mongoose";

export interface IVariant extends Document {
    productId: Types.ObjectId;
    size: string;
    color: string;
    stock: number;
  }
  
  const VariantSchema = new Schema<IVariant>({
    productId: { type: Schema.ObjectId, ref: 'Product', required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    stock: { type: Number, required: true },
  });
  
  export const Variant = models?.Variant || model<IVariant>('Variant', VariantSchema);