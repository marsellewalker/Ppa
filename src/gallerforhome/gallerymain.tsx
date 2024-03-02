import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../assets/IMG1.jpg";
import img2 from "../assets/IMG2.jpg";
import img3 from "../assets/IMg3.jpg";
import img4 from "../assets/IMG4.jpg";
import img5 from "../assets/IMG5.jpg";
import img6 from "../assets/IMG6.jpg";


const MyGallery = () => {
  const images = [
    {
      original: img1,
      description: "Image 1 Description",
    },
    {
      original: img2,
      description: "Image 2 Description",
    },
    {
      original: img3,
      description: "Image 3 Description",
    },
    {
      original: img4,
      description: "Image 4 Description",
    },
    {
      original: img5,
      description: "Image 5 Description",
    },
    {
      original: img6,
      description: "Image 6 Description",
    },

    // Add more images as needed
  ];

  return (
    <Gallery
      className="c"
      items={images}
      showNav={false}
      showFullscreenButton={false}
      PlayButton={false}
      renderItem={(item) => (
        <div className="image-gallery-image">
          <img
            className="style"
            src={item.original}
            alt={item.originalAlt}
          />
        </div>
      )}
    />
  );
};

export default MyGallery;
