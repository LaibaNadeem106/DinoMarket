import { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/public/img1.png";
import image2 from "/public/image2.png";
import heroImage from "/public/hero-img2.png";
import image3 from "/public/image3.png";
import image4 from "/public/image4.png";
import image5 from "/public/image5.png";
import image6 from "/public/image6.png";
import image7 from "/public/image7.png";
import image8 from "/public/image8.png";
import image9 from "/public/image9.png";
import image10 from "/public/image10.png";

const ProductCart: React.FC = () => {
  useEffect(() => {
    // Client-side logic here
    console.log("Running on the client side");

    // Example: Fetching data on the client side
    const fetchData = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        const data = await response.json();
        // Process the data or update state as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts on the client side
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
  };

  return (
    <div className="product-cart-container">
      <h1 className="text-blue-500 text-2 font-bold mb-3 text-center">PRODUCTS</h1>
      <p className="text-black-500 text-4xl font-bold mb-8 text-center">Check What We Have</p>
      
      <Slider {...settings}>
        <div className="product-slide hover-enlarge">
          <Image src={image2} alt="product" width={380} height={400} />
          <h3 className="font-bold text-small text-gray-700 mt-3">Brushed Raglan Sweatshirt</h3>
          <p className="font-bold text-small text-gray-700">$195</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={heroImage} alt="product" width={380} height={400} />
          <h4 className="font-bold text-small text-gray-700 mt-3">Cameryn Sash Tie Dress</h4>
          <p className="font-bold text-small text-gray-700">$545</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image3} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Flex Sweatshirt</h5>
          <p className="font-bold text-small text-gray-700">$175</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image4} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Flex Sweatpants</h5>
          <p className="font-bold text-small text-gray-700">$175</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image5} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Pink Fleece Sweatpants</h5>
          <p className="font-bold text-small text-gray-700">$195</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image6} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Lite Sweatpants</h5>
          <p className="font-bold text-small text-gray-700">$150</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={img1} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Imperial Alpaca Hoodie</h5>
          <p className="font-bold text-small text-gray-700">$525</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image7} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Flex Push Button Bomber</h5>
          <p className="font-bold text-small text-gray-700">$225</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image8} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Muscle Tank</h5>
          <p className="font-bold text-small text-gray-700">$75</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image9} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Brushed Bomber</h5>
          <p className="font-bold text-small text-gray-700">$225</p>
        </div>
        <div className="product-slide hover-enlarge">
          <Image src={image10} alt="product" width={380} height={400} />
          <h5 className="font-bold text-small mt-3 text-gray-700">Raglan Sweatshirt</h5>
          <p className="font-bold text-small text-gray-700">$195</p>
        </div>
        
        {/* Add more slides as needed */}
      </Slider>

      <style jsx>
{`
  .product-cart-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .product-slide {
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    margin-right: 20px;
    position: relative;
  }

  .hover-enlarge {
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease-in-out;
  }

  .hover-enlarge:hover {
    transform: scale(1.1);
  }

  .product-slide Image {
    width: 380; /* Set your desired width */
    height: 400; /* Maintain aspect ratio */
    
  }
`}
</style>


</div>
  
  );
};

export default ProductCart;



