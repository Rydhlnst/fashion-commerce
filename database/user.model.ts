import { Schema, model, models, Types, Document } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: 'user' | 'admin';
  address?: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  address: String,
}, { timestamps: true });

export const User = models?.User || model<IUser>('User', UserSchema);