import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.weddingz.in/images/6fb24a5e822870e6521400d8ff26bb8a/banquet-hall-decoration-ideas-that-can-be-borrowed-for-every-wedding-hall-entrance-decor.jpg"
          alt="Banquate hall"
          className="pListImg"
        />
        <div className="pListTitles">
           <h1>Banquate Halls</h1>
          <h2><strong>150 + Banquate Halls</strong></h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/15861550/pexels-photo-15861550/free-photo-of-camera-on-a-self-leveling-mount.jpeg"
          alt="Photography"
          className="pListImg"
        />
        <div className="pListTitles">
          
          <h1>Photography</h1>
          <h2><strong>759 + Photographer</strong></h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Catering"
          className="pListImg"
        />
        <div className="pListTitles">
           <h1>Catering</h1>
          <h2><strong>1000 + Catering</strong></h2>
          </div>
      </div>
      <div className="pListItem">
        <img
          src="https://c.ndtvimg.com/2022-10/k0jspnoo_indian-bridal-makeup_625x300_26_October_22.jpg?im=Resize=(1200,757)"
          alt="Make Up"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Make up</h1>
          <h2><strong>900 + Makeup artist</strong></h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/754262/pexels-photo-754262.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Decorations</h1>
          <h2><strong>500 + Decoraters</strong></h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
