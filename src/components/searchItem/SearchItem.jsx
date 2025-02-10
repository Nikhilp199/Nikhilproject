import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://www.oyorooms.com/blog/wp-content/uploads/2018/03/fe-34.jpg"
        alt="Galaxy banquets"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Galaxy banquet</h1>
        <span className="siDistance">500m from Goregaon</span>
        <span className="siTaxiOp">Free Pick and drop</span>
        <span className="siSubtitle">
          Fully Air conditioning
        </span>
        <span className="siFeatures">
          Disco hall • 10 bathrooms • 700 capecity
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$9000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
