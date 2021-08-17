import { Carousel } from 'react-carousel-minimal';
import img1 from '../../assets/person-touching-hand.png';
import img2 from '../../assets/vitiligio_balm-4.png';
import img3 from '../../assets/person-holding-fern.png';
import img4 from '../../assets/Cream-2.png';

function ImageSlider() {
  const data = [
    {
      image: img1
    },
    {
      image: img2
    },
    {
      image: img3
    },
    {
      image: img4
    },
  ];

  //   const captionStyle = {
  //     fontSize: '2em',
  //     fontWeight: 'bold',
  //   }
  //   const slideNumberStyle = {
  //     fontSize: '20px',
  //     fontWeight: 'bold',
  //   }

  return (
    <div className="image-slider">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px'
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="600px"
            height="300px"
            // radius="10px"
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
