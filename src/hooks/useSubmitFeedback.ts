import { useState } from "react";
import type { FeedbackData } from "../types/feedback";
import { submitFeedbackApi } from "../services/api";

export const useSubmitFeedback = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submitFeedback = async (data: FeedbackData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      await submitFeedbackApi(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  };

  return { submitFeedback, status, errorMessage, setStatus };
};
