import type { FeedbackData } from "../types/feedback";

export const submitFeedbackApi = async (
  data: FeedbackData,
): Promise<{ success: boolean }> => {
  return new Promise((resolve, reject) => {
    console.log("Submitting", data);
    setTimeout(() => {
      // Simulate failure for error handling
      if (Math.random() < 0.1) {
        reject(new Error("Server connection lost. Please try again."));
      } else {
        resolve({ success: true });
      }
    }, 1500);
  });
};
