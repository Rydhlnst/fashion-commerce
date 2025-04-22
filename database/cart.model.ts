import { model, models, Schema, Types } from "mongoose";

export interface ICartItem {
    variantId: Types.ObjectId;
    quantity: number;
  }
  
  export interface ICart extends Document {
    userId: Types.ObjectId;
    items: ICartItem[];
  }
  
  const CartSchema = new Schema<ICart>({
    userId: { type: Schema.ObjectId, ref: 'User', required: true },
    items: [
      {
        variantId: { type: Types.ObjectId, ref: 'Variant', required: true },
        quantity: { type: Number, required: true },
      },
    ],
  });
  
  export const Cart = models?.Cart || model<ICart>('Cart', CartSchema);