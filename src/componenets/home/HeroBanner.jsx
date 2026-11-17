
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO SHOEASE</p>

        <h1>Find Everything You Love in One Place</h1>

        <p>
          Discover quality products at great prices.
          Enjoy a simple and convenient shopping experience.
        </p>

        <Link to="/shop" className="hero-button">
          Shop Now
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Featured shopping product"
        />
      </div>
    </section>
  );
}

export default HeroBanner;
