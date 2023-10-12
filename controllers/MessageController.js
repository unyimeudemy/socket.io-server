import MessageModel from "../models/messageModel.js";

export const addMessage = async (req, res) => {
  const { chatID, senderID, text } = req.body;

  const message = new MessageModel({
    chatID,
    senderID,
    text,
  });

  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  const { chatID } = req.params;

  try {
    const result = await MessageModel.find({ chatID });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
