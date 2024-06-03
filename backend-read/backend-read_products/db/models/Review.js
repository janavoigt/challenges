import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewtSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  raiting: { type: Number, required: true },
});

const Review =
  mongoose.models.Review || mongoose.model("Review", reviewtSchema);

export default Review;
