import Tournament from "../models/Tournament.model.js";

export const createTournament = async (req, res) => {
  const user = req.user;
  const { title, content, imageURL } = req.body;
  if (!title || !content || !imageURL)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const tournament = Tournament.create({
      title,
      content,
      imageURL,
      createdBy: user.uid,
    });
    if (tournament) {
      return res
        .status(201)
        .json({ message: "Tournament Created Successfully!" });
    } else {
      return res.status(500).json({ message: "Failed to Create Tournament!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    if (tournaments) {
      return res.status(200).json(tournaments);
    } else {
      return res.status(404).json({ message: "No Tournaments Found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTournament = async (req, res) => {
  const { tournamentID } = req.params;
  try {
    const tournament = Tournament.findById(tournamentID);
    if (tournament) {
      return res.status(200).json(tournament);
    } else {
      return res.status(404).json({ message: "Tournament Not Found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTournament = async (req, res) => {
  const { tournamentID } = req.params;
  try {
    const tournament = await Tournament.findByIdAndDelete(tournamentID);
    if (tournament) {
      return res
        .status(200)
        .json({ message: "Tournament Deleted Successfully!" });
    } else {
      return res.status(404).json({ message: "Tournament Not Found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
