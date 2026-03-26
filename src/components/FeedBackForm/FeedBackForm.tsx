import { useState } from "react";
import StarRating from "./StarRating";
import styles from "./FeedBackForm.module.css";

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {};

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
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedBackForm;
