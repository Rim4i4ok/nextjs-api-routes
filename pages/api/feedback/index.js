import fs from "fs";
import { buildFeedbackPath, geFeedBackData } from "../../../utils/data";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    const data = geFeedBackData();
    data.push(newFeedback);

    const filePath = buildFeedbackPath();

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const data = geFeedBackData();

    res.status(200).json({ feedback: data });
  }
}

export default handler;
