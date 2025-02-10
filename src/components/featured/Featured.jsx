import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/premium-photo/opulent-royal-banquet-hall-with-elaborate-decorations-high-resolution-realistic_1296313-2104.jpg"
          alt="Thapa banquate"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Thapa Banquate</h1>
          <h2>Churchgate</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/originals/13/b3/24/13b32474b79279e1d08b4426012deaa9.jpg"
          alt="Lagecy Banquate"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagecy Banquate</h1>
          <h2>Borivali(W)</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://s-media-cache-ak0.pinimg.com/736x/99/a3/bd/99a3bdc77895764704abf3cbf809521f.jpg"
          alt="Nakshatra banquate"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nakshatra Banquate</h1>
          <h2>Dadar</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
