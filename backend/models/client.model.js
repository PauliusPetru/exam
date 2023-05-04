import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    startYear: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: Number,
      required: true,
    },
    endYear: {
      type: Number,
      required: true,
    },
    endMonth: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: {
      createdAt: "created_at",
    },
  }
);

const Client = model("client", clientSchema);

export default Client;
