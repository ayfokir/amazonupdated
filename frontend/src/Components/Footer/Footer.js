import React, { useState } from 'react'
import './Footer.css'
function Footer ()
{
  let [ show1, setShow1 ] = useState(false);
  let [ show2, setShow2] = useState(false);
  let [ show3, setShow3 ] = useState(false);
  let [ show4, setShow4 ] = useState(false);

  const handlePluse1 = () =>
  { 
    if ( show1)
    {
      setShow1( false)
    }
    else
    {
      setShow1(true)
    }
  }
  const handlePluse2 = () =>
  { 
    if ( show2)
    {
      setShow2( false)
    }
    else
    {
      setShow2(true)
    }
  }
  const handlePluse3 = () =>
  { 
    if ( show3)
    {
      setShow3( false)
    }
    else
    {
      setShow3(true)
    }
  }
  const handlePluse4 = () =>
  { 
    if ( show4)
    {
      setShow4( false)
    }
    else
    {
      setShow4(true)
    }
  }
  

  return (
    <>
      <div className="background">
        <div className="displayFlex">
          <div>
            <ul>
              <h3 className={` ${show1 && "show11"}`} onClick={handlePluse1}>
                Get to Know Us
              </h3>
              <hr />
              {/* {`row__poster ${isLargeRow && "row__posterLarg"}`} */}
              <div className={` hide ${show1 && "show1"}    `}>
                <li>Carres</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h3 onClick={handlePluse2} className={` ${show2 && "show22"}`}>
                Make Money with Us
              </h3>

              <hr />
              <div className={` hide ${show2 && "show2"}    `}>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>›See More Make Money with Us</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h3 onClick={handlePluse3} className={` ${show3 && "show33"}`}>
                Amazon Payment Products
              </h3>
              <hr />
              <div className={` hide ${show3 && "show3"}    `}>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <h3 onClick={handlePluse4} className={` ${show4 && "show44"}`}>
                Let Us Help You
              </h3>
              <hr />
              <div className={` hide ${show4 && "show4"}    `}>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
              </div>
            </ul>
          </div>
        </div>
        {/* <hr />   */}
      </div>

      <div className="backgground">
        <div className="column">
          <div className="row">
            <div className="margin">
              <h3>Amazon Music</h3>
              <h5>Stream millions of songs</h5>
            </div>
            <div className="margin">
              <h3>Amazon Business</h3>
              <h5>Everything For your Business</h5>
            </div>
            <div className="margin">
              <h3>Box Office Mojo</h3>
              <h5>Find Movie Box Office Data</h5>
            </div>
            <div className="margin">
              <h3>IMDbPro</h3>
              <h5>Get Info Entertainment Proffesionals Need</h5>
            </div>
            <div className="margin">
              <h3>Ring</h3>
              <h5>Smart Home Security Systems</h5>
            </div>
          </div>

          <div className="row">
            <div className="margin">
              <h3>Amazon Advertising</h3>
              <h5>Find, attract, and engage customers</h5>
            </div>
            <div className="margin">
              <h3>AmazonGlobal</h3>
              <h5>Ship Orders Internationally</h5>
            </div>
            <div className="margin">
              <h3>ComXology</h3>
              <h5>Thousands of Digital Comics</h5>
            </div>
            <div className="margin">
              <h3>Kindle Direct Publishing </h3>
              <h5>India Digital & Print Publishing Made easy</h5>
            </div>
            <div className="margin">
              <h3>eero Wifi</h3>
              <h5>Smart Home Security Systems</h5>
            </div>
          </div>

          <div className="row">
            <div className="margin">
              <h3>6pm</h3>
              <h5>Score deals on fashion brands</h5>
            </div>
            <div className="margin">
              <h3>Home Services</h3>
              <h5>Experienced Pros Happiness Guarantee</h5>
            </div>
            <div className="margin">
              <h3>DPReview</h3>
              <h5>Digital Photography</h5>
            </div>
            <div className="margin">
              <h3>Prime Video Direct </h3>
              <h5>Video Distribution Made Easy</h5>
            </div>
            <div className="margin">
              <h3> Blink</h3>
              <h5>Smart Security for Every Home</h5>
            </div>
          </div>
          <div className="row">
            <div className="margin">
              <h3> AbeBooks</h3>
              <h5>Books, art & collectibles</h5>
            </div>
            <div className="margin">
              <h3>Amazon Web Services</h3>
              <h5>Scalable Cloud Computing Services</h5>
            </div>
            <div className="margin">
              <h3> Fabric</h3>
              <h5>Sewing, Quilting & Knitting</h5>
            </div>
            <div className="margin">
              <h3>Shopbop </h3>
              <h5>Designer Fashion Brands</h5>
            </div>
            <div className="margin">
              <h3> Neighbors App</h3>
              <h5>Real-Time Crime & Safety Alerts </h5>
            </div>
          </div>
        </div>
        <div className="last">
          <h5> Conditions of Use Privacy Notice Your Ads Privacy Choices </h5>
          <h5>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</h5>
        </div>
      </div>
    </>
  );
}

export default Footer
