import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (value: number) => void;
}) => {
  const [hover, setHover] = useState(0);
  return (
    <fieldset>
      <legend>Rate your experience</legend>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <label
            key={star}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
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
                fill={star <= (hover || rating) ? "#ffd700" : "transparent"}
                color={star <= (hover || rating) ? "#ffd700" : "#e4e5e9"}
                style={{ cursor: "pointer", transition: "all 0.2s" }}
              />
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default StarRating;
