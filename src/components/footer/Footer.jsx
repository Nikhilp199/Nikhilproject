import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div id="about" className="foot">
    <div className="footer">
      <div className="fLists">
        <div className="artical">
          <div className="Title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>UTSAV will offer a comprehensive platform that lists a wide variety of banquet halls, 
              complete with detailed descriptions, high-resolution images, and user reviews. </h3>
              <p>This platform will simplify the search and booking process, allowing clients to find and reserve venues that match their specific requirements.
               As a third-party service, UTSAV will also provide value-added services such as customizable event packages, including catering, decoration, and entertainment options. 
               By leveraging cutting-edge technology and a customer-focused approach, UTSAV aims to streamline the event planning process, making it more efficient and enjoyable for clients,
                while also helping venue owners maximize their bookings and revenue.</p>
          <div className="button">
            <a href="">Read More</a>
          </div>
          </div>
        </div>
        <div className="img">
          <img src="https://th.bing.com/th/id/OIP.99PHo1P3NE2qA8vN8l-3BgHaE8?pid=ImgDet&w=474&h=316&rs=1" alt=""/>
        </div>
      </div>
      <div className="fText">Copyright © 2025 Utsav.</div>
    </div>
    </div>
  );
};

export default Footer;
