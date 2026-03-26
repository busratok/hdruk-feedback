import { useState } from "react";
import StarRating from "./StarRating";

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <StarRating rating={rating} setRating={setRating} />
    </form>
  );
};

export default FeedBackForm;
