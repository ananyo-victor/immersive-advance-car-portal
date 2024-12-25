import { Carousel } from "flowbite-react";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Carousel 1" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Carousel 2" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Carousel 3" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Carousel 4" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Carousel 5" />
      </Carousel>
    </div>
  );
}
