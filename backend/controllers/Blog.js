import Blog from "../models/Blog.model.js";

export const createBlog = async (req, res) => {
  const { title, content, createdBy } = req.body;
  if (!title || !content || !createdBy)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const blog = Blog.create({
      title,
      content,
      createdBy,
    });
    if (blog) {
      return res.status(201).json({ message: "Blog Created Successfully!" });
    } else {
      return res.status(500).json({ message: "Failed to Create Blog!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs) {
      return res.status(200).json(blogs);
    } else {
      return res.status(404).json({ message: "No Blogs Found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  const { blogID } = req.params;
  try {
    const blog = Blog.findById(blogID);
    if (blog) {
      return res.status(200).json(blog);
    } else {
      return res.status(404).json({ message: "Blog Not Found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
