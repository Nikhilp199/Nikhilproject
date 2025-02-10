import {
  
  faSearch,
  faCalendarDays,
  faHouse,
  faPerson,
  faPlane,
  faPhone,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file for calender
import "react-date-range/dist/theme/default.css"; // theme css file for calender
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";

 
 
const Header = ({ type }) => {
  const [destination,setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //<------------------------------------------------------------------------------------------------------------------------->
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    Peoples: 1,
    
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  //<------------------------------------------------------------------------------------------------------------>//

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const about = () => {
    navigate("/Footer")
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHouse} />
            <span><Link to="#home" className="link">Home</Link></span>

          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Service</span>
          </div>
           
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faUser} />
             <span><Link to="#about" className="link">About US</Link></span> 
          </div>
          
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contect US</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
               YOUR UTSAV,YOUR WAY
            </h1>
            <p className="headerDesc">
              "Khushiyon ka Rang UTSAV ke Sang"
            </p>
            <button className="headerBtn">Sign in / Register</button>
            
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Search your banqute"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.Peoples} Peoples · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Peoples</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Peoples <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("Peoples", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Peoples}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("Peoples", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                     
                    
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
