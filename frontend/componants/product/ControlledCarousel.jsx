import {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
    >
      {images.map((image) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
