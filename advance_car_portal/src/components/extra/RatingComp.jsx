import { Rating } from "flowbite-react";

const RatingComp = () => {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  );
}

export default RatingComp