import { Schema, model } from "mongoose";

const TournamentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageURL: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

const Tournament = model("Tournament", TournamentSchema);

export default Tournament;
