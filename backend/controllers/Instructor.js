import Instructor from "../models/Instructor.model.js";

export const createInstructor = async (req, res) => {
  const createdBy = req.user.uid;
  const { name, imageURL, description } = req.body;
  if (!name || !imageURL || !description)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const instructor = Instructor.create({
      name,
      imageURL,
      description,
      createdBy,
    });
    if (instructor) {
      return res.status(201).json({
        message: "Instructor Created Successfully!",
        data: instructor,
      });
    } else {
      return res.status(500).json({ message: "Failed to Create Instructor!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getInstructor = async (req, res) => {
  const { instructorID } = req.params;
  try {
    const instructor = await Instructor.findById(instructorID);
    if (instructor) {
      res.status(200).json(instructor);
    } else {
      res.status(404).json({ message: "Instructor Not Found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInstructor = async (req, res) => {
  const { instructorID } = req.params;
  try {
    const instructor = await Instructor.findByIdAndDelete(instructorID);
    if (instructor) {
      res.status(200).json({ message: "Instructor Deleted Successfully!" });
    } else {
      res.status(404).json({ message: "Instructor Not Found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
