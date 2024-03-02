import Video from "../models/Video.model.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createVideo = async (req, res) => {
  const { link } = req.body;
  try {
    const newVideo = Video.create({ link });
    if (newVideo) {
      res.status(201).json(newVideo);
    } else {
      res.status(400).json({ message: "Failed to create video" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteVideo = async (req, res) => {
  const { videoID } = req.params;
  try {
    const deletedVideo = await Video.findByIdAndDelete(videoID);
    if (deletedVideo) {
      res.json(deletedVideo);
    } else {
      res.status(404).json({ message: "Video not found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
