import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/14716282/pexels-photo-14716282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="The sea facing"
          className="fpImg"
        />
        <span className="fpName">The Sea facing</span>
        <span className="fpCity">Marine drive</span>
        <span className="fpPrice">Starting from $12000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.thegoldencrownhotel.com/images/site-specific/golden_crown/weddings/ballroom3.jpg"
          alt="Golden crown"
          className="fpImg"
        />
        <span className="fpName">Golden crown</span>
        <span className="fpCity">Vasai(w)</span>
        <span className="fpPrice">Starting from $6000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://floragreenbanquet.com/wp-content/uploads/2023/06/A-Wonderful-Combination-of-Quality-and-Elegance-Luxury-Banquet-Hall-in-Gurgaon.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The woodland</span>
        <span className="fpCity">Girgaon-Mumbai</span>
        <span className="fpPrice">Starting from $11000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.coralisle.com/wp-content/uploads/2018/07/photo-22-1205x800.jpg"
          alt="Thikabai Hall"
          className="fpImg"
        />
        <span className="fpName">Thikabai hall</span>
        <span className="fpCity">virar(e)</span>
        <span className="fpPrice">Starting from $5000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
