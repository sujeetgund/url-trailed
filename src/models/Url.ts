import mongoose, { Schema, Document } from "mongoose";

export interface Url extends Document {
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
  totalClicks: number;
}

const urlSchema: Schema<Url> = new Schema({
  originalUrl: {
    type: String,
    required: [true, "original url is required"],
  },

  shortUrl: {
    type: String,
    required: [true, "short url is required"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  totalClicks: {
    type: Number,
    default: 0,
  },
});

const Url =
  (mongoose.models.Url as mongoose.Model<Url>) ||
  mongoose.model("Url", urlSchema);

export default Url;
