import Client from "../models/client.model.js";

export const clientExist = async (req, res, next) => {
  try {
    const clientId = req.params.id;

    const clientExists = await Client.findById(clientId);

    if (!clientExists) {
      res.status(404).json({ message: "Client not found" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
