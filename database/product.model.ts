import { Schema, model, models, Types, Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    categoryId: Types.ObjectId;
    brandId: Types.ObjectId;
    price: number;
    discountPrice?: number;
    images: string[];
    sizes: string[];
    colors: string[];
    isFeatured: boolean;
    tags: string[];
  }
  
  const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    categoryId: { type: Schema.ObjectId, ref: 'Category', required: true },
    brandId: { type: Schema.ObjectId, ref: 'Brand' },
    price: { type: Number, required: true },
    discountPrice: Number,
    images: [String],
    sizes: [String],
    colors: [String],
    isFeatured: { type: Boolean, default: false },
    tags: [String],
  }, { timestamps: true });
  
  export const Product = models?.Product || model<IProduct>('Product', ProductSchema);
