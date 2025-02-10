import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://media.weddingz.in/images/8e3fc314bb295477cd6bfd0251f1d3c1/why-these-are-the-best-banquet-halls-in-noida-our-top-list.jpg"
    },
    {
      src: "https://apis.xogrp.com/media-api/images/a21b7dbe-6aa1-11e4-843f-22000aa61a3e",
    },
    {
      src: "https://th.bing.com/th/id/R.bad7f3414f4b213899bb23e4547223aa?rik=%2b9raxPByJgfALg&riu=http%3a%2f%2fa.mktgcdn.com%2fp%2ffLAsapEVZeUb7At6YumLQH08Wcgxb3JN_xiZ-2zXbO8%2f5760x3840.jpg&ehk=DyelXQvtsLDqN0xUbLEs2BeWZKnXwDvy873UORZlUbc%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      src: "https://i.pinimg.com/originals/47/b1/b2/47b1b2ceb6b420824b6ddd37b854b48f.jpg",
    },
    {
      src: "https://media.weddingz.in/images/46d0bb7bcba3e5e2a993749156c18fc0/popular-banquet-halls-in-andheri-mumbai-that-are-breathtakingly-gorgeous-11.jpg",
    },
    {
      src: "https://www.oyorooms.com/blog/wp-content/uploads/2018/01/features-1080x720.jpg"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Galaxy Banquate</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>funfista road,yashwant gaurav,Goregaon(W)</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 1Km from Goregaon station
          </span>
          <span className="hotelPriceHighlight">
            Book a Lauxrius banquate hall and get free pick & drop service.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Celebrate your day in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect venue to start marrage life Journey</h1>
              <span>
                Located in the real heart of Goregoan, this Banquate has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$9000</b> (1 Shift)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
