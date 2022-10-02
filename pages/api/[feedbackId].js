import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  const { feedbackId } = req.query;

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  const selectedFeedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
