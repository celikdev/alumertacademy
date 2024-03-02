import Lesson from "../models/Lesson.model.js";

export const createLesson = async (req, res) => {
  const user = req.user;
  const { title, imageURL, content, price } = req.body;
  if (!title || !imageURL || !content || !price)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const lesson = Lesson.create({
      title,
      imageURL,
      content,
      price,
      createdBy: user.uid,
    });
    if (lesson) {
      return res.status(201).json({ message: "Lesson Created Successfully!" });
    } else {
      return res.status(500).json({ message: "Failed to Create Lesson!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLesson = async (req, res) => {
  const { lessonID } = req.params;
  try {
    const lesson = await Lesson.findByIdAndDelete(lessonID);
    if (lesson) {
      res.status(200).json({ message: "Lesson Deleted Successfully!" });
    } else {
      res.status(404).json({ message: "Lesson Not Found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
