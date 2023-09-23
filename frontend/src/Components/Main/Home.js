import React from 'react'
import './Home.css';
import backgroundimage from '../../CommonResource/images/amazon-Background.png'
import Product from './Product/Product';
import children from '../../CommonResource/images/product-1.jpg'
import camera from '../../CommonResource/images/camera.jpg'
import watches from '../../CommonResource/images/watches.jpg'
import watch from '../../CommonResource/images/watch.jpg'
import fitnessNeeds from '../../CommonResource/images/fitnessNeeds.jpg'
import puppy from '../../CommonResource/images/puppy.jpg'
import springNewArrivals from '../../CommonResource/images/springNewArrivals.jpg'
import cup from '../../CommonResource/images/cup.jpg'
import tshirt from '../../CommonResource/images/T-shirt.jpg'
import shoe from '../../CommonResource/images/shoe.jpg'
import cups from '../../CommonResource/images/newcup.jpg'
import harryPotter from '../../CommonResource/images/HarryPotter.jpg'
import DehazeIcon from "@mui/icons-material/Dehaze";



function Home() {
    return (
      <div className="home">
        <div className="home__container ">
          <img className="home__image" src={backgroundimage} alt="" />
        </div>
        <div className="home__row horizontalScrollAllow">
          <Product
            id="12321341"
            title="Work Out at Home Using Hand Weights"
            price={11.96}
            rating={5}
            image={fitnessNeeds}
          />
          <Product
            id="12321342"
            title="New Incoming Watch, This is outdated Watch"
            price={16.96}
            rating={3}
            image={watch}
          />

          {/* <Product
            id="12321345"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={13.96}
            rating={3}
            image={children}
          /> */}
        </div>
        <div className="home__row horizontalScrollAllow">
          <Product
            id="12321343"
            title="New Incoming Watch, This is outdated Watch"
            price={21.96}
            rating={7}
            image={watches}
          />
          <Product
            id="12321344"
            title="Amazing Puppy and Cat Availabe on The market now"
            price={31.96}
            rating={2}
            image={puppy}
          />
          <Product
            id="12321345"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={13.96}
            rating={3}
            image={children}
          />
          <Product
            id="12321345"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={13.96}
            rating={3}
            image={harryPotter}
          />
        </div>
        <div className="home__row horizontalScrollAllow">
          <Product
            id="12321346"
            title="New Outdated Laddy Dresses"
            price={19.96}
            rating={7}
            image={springNewArrivals}
          />
          <Product
            id="12321346"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={21.96}
            rating={2}
            image={cup}
          />
          <Product
            id="12321346"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={51.96}
            rating={7}
            image={tshirt}
          />
          <Product
            id="12321346"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={18.96}
            rating={9}
            image={shoe}
          />
        </div>
        <div className="home__row horizontalScrollAllow">
          <Product
            id="12321346"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={11.96}
            rating={3}
            image={cups}
          />
          <Product
            id="12321346"
            title="Father with his son. douther need to wait so many times with her fathers"
            price={13.96}
            rating={7}
            image={camera}
          />
        </div>
      </div>
    );
}

export default Home
