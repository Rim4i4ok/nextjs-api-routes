import { geFeedBackData } from "../../../utils/data";

function handler(req, res) {
  const { feedbackId } = req.query;

  const data = geFeedBackData();

  const selectedFeedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
