import { useState } from "react";
import { Star } from "lucide-react";

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Rate your experience</legend>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
              />
              <span>
                <Star
                  size={32}
                  fill={star <= rating ? "#ffd700" : "transparent"}
                  color={star <= rating ? "#ffd700" : "#e4e5e9"}
                  style={{ cursor: "pointer", transition: "all 0.2s" }}
                />
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default FeedBackForm;
