import Client from "../models/client.model.js";
import Post from "../models/client.model.js";

export const getClients = async (_req, res) => {
  try {
    const clients = await Client.find();

    res.json(clients);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const getClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await Client.findById(clientId);

    res.json(client);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const createClient = async (req, res) => {
  try {
    const client = req.body;

    const validatedclient = new Client(client);

    const savedData = await validatedclient.save();

    res.json(savedData);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const updateClient = async (req, res) => {
  try {
    console.log(req.params);
    const clientId = req.params._id;
    const updatedClientData = req.body;

    await Client.findByIdAndUpdate(updatedClientData._id, updatedClientData);
    const updatedClient = await Post.findById(clientId);

    res.json(updatedClient);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    await Client.findByIdAndDelete(clientId);

    res.json({ message: "Client deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error..." });
  }
};
