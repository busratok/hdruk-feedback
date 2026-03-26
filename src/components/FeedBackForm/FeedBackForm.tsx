import { useState } from "react";
import StarRating from "./StarRating";
import styles from "./FeedBackForm.module.css";
import { useSubmitFeedback } from "../../hooks/useSubmitFeedback";

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { submitFeedback, status, errorMessage } = useSubmitFeedback();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting feedback:", { rating, comment });
    await submitFeedback({ rating, comment });
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage} role="alert">
        <h3>Thank you!</h3>
        <p>Your feedback helps us improve our health data tools.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <StarRating rating={rating} setRating={setRating} />

      <div className={styles.commentSection}>
        <label htmlFor="comment">Comments *</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="How can we improve our service?"
          rows={4}
          required
          aria-required="true"
        />
      </div>
      {status === "error" && (
        <p className={styles.errorText} role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedBackForm;
