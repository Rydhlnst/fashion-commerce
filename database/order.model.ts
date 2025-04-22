import { model, models, Schema, Types } from "mongoose";

export interface IOrderItem {
    variantId: Types.ObjectId;
    quantity: number;
  }
  
  export interface IOrder extends Document {
    userId: Types.ObjectId;
    items: IOrderItem[];
    totalAmount: number;
    status: 'pending' | 'paid' | 'shipped' | 'delivered';
    shippingAddress: string;
    paymentMethod: string;
    createdAt: Date;
  }
  
  const OrderSchema = new Schema<IOrder>({
    userId: { type: Schema.ObjectId, ref: 'User', required: true },
    items: [
      {
        variantId: { type: Types.ObjectId, ref: 'Variant', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered'], default: 'pending' },
    shippingAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  export const Order = models?.Order || model<IOrder>('Order', OrderSchema);