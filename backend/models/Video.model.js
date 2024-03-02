import { Schema, model } from "mongoose";

const VideoSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
});

const Video = model("Video", VideoSchema);

export default Video;
