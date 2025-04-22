import { model, models, Schema, Types } from "mongoose";

export interface IReview extends Document {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
    rating: number;
    comment: string;
    date: Date;
  }
  
  const ReviewSchema = new Schema<IReview>({
    userId: { type: Schema.ObjectId, ref: 'User', required: true },
    productId: { type: Schema.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    date: { type: Date, default: Date.now },
  });
  
  export const Review = models?.Review || model<IReview>('Review', ReviewSchema);
  