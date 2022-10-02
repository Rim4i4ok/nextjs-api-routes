import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);

  return JSON.parse(fileData);
}

export function geFeedBackData() {
  const filePath = buildFeedbackPath();
  return extractFeedback(filePath);
}
