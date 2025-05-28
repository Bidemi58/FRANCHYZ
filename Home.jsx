import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; 
import Signup from './Signup';

const Home = () => {
  return (
    <main>
      <section className="shopping">
        <div className="shoppingtool">
          <h1>Shopping Tool And Rewards Club</h1>
          <p>With over 1500+ businesses and discounts available. Sign up today to start saving!</p>
          <button
            className="signup-btn"
            onClick={() => window.open(window.location.origin + '/signup', '_blank', 'noopener,noreferrer')}
           >
            Sign Up
          </button>
          <div>
            <img src="https://github.com/Bidemi58/FRANCHYZ/raw/main/downloadonappstore.png" alt="download-on-appstore" />
            <img src="https://github.com/Bidemi58/FRANCHYZ/raw/main/downloadonplaystore.png" alt="download-on-playstore" />
          </div>
        </div>
        <div className="finaltopimg">
          <img src="https://github.com/Bidemi58/FRANCHYZ/raw/main/franchyz_final_topp.png" alt="top visual" />
        </div>
      </section>

      {/* Wrap the routes inside a Routes component */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <section className="nigeria">
        <h1>FIRST NIGERIA FRANCHYZE EMBASSY</h1>
      </section>

      <section className="moreBusinessPartner">
        <ul>
          <li>
            <h1>More Business Partners</h1>
            <p>Connect with a growing network of reliable business partners.</p>
          </li>
          <li>
            <h1>Savings Through Our Discount Rates</h1>
            <p>Enjoy amazing deals and exclusive discounts on purchases.</p>
          </li>
          <li>
            <h1>More Stores You Can Connect To Online</h1>
            <p>Shop from a wide range of trusted stores with ease.</p>
          </li>
          <li>
            <h1>Fast Delivery</h1>
            <p>Get your orders delivered quickly and efficiently.</p>
          </li>
        </ul>
      </section>

      <section className="aboutUsimgcont">
        <div className="aboutimg">
          <img src="https://github.com/Bidemi58/FRANCHYZ/raw/main/pansada.png" alt="founder" />
        </div>
        <div className="aboutus">
          <div className="firstaboutus">
            <h1>About Us</h1>
            <p>
              "Welcome to FRANCHYZ, your ultimate shopping destination. Our platform and mobile app
              connect you with 1,000+ trusted partners, offering exclusive deals and seamless savings.
              <br />
              At FRANCHYZ, members are part of an engaged community unlocking incredible value.
              <br />
              We pride ourselves on exclusive partnerships offering unmatched benefits."
            </p>
          </div>
          <div className="secondaboutus">
            <h1><span className="secondUUs">Founder: </span>ARAB58</h1>
          </div>
        </div>
      </section>

      <section className="entry">
        <h2>Entry Membership</h2>
        <h1>#5,000</h1>
        <p>Billed Monthly (cancel anytime)</p>
        <button
            
            onClick={() => window.open(window.location.origin + '/signup', '_blank', 'noopener,noreferrer')}
           >
            Select
          </button>
        <ul>
          <li>Complimentary automatic entry into every monthly draw.</li>
          <li>Exclusive "entry" discounts at selected partners.</li>
          <li>5% off all FRANCHYZE merchandise.</li>
          <li>Early access to FRANCHYZE promotions via email.</li>
        </ul>
      </section>

      <section className="whatwedo">
        <h1 className="whatwedoheader">WHAT WE DO</h1>
        <div>
          <h1>Motor Car</h1>
          <p>Your hub for offers from Nigeria’s best auto-related services and parts.</p>
        </div>
        <div>
          <h1>Homewares and Services</h1>
          <p>Deals on furniture, decor, electrical, plumbing, and more!</p>
        </div>
        <div>
          <h1>Merchandise</h1>
          <p>Shop our branded gear or sell your own accessories and apparel.</p>
        </div>
      </section>

      <section className="membership">
        <h1>Membership Advantages</h1>
        <div>
          <h1>Discounts</h1>
          <p>Huge savings across Nigeria for an affordable fee.</p>
        </div>
        <div>
          <h1>Expert Support</h1>
          <p>Need help? Our team is ready to guide you.</p>
        </div>
        <div>
          <h1>Freedom to Cancel</h1>
          <p>Cancel anytime—no commitments, no hassle.</p>
        </div>
      </section>

      <section className="giveaway">
        <h1>GIVEAWAY COMING SOON!!!!</h1>
      </section>
    </main>
  );
};

export default Home;
