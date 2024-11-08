import { createData } from "../services/fileservice.js";

export const createItem = async (req, res) => {
  try {
    const data = req.body;
    await createData(data);

    res.status(201).json({
      message: "data created ok",
      status: 201,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating data",
      status: 500,
      error,
    });
  }
};
