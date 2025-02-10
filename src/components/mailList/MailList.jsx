import "./mailList.css"
import {
  
  faAddressBook,
  faPhone,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="e-mail" placeholder="Your Email" />
        <button>Subscribe</button>
        <div className="no">
          <FontAwesomeIcon icon={faPhone} />
        <h4>Contact no.:8262036780</h4> 
        </div>
        <div  className="add">
        <FontAwesomeIcon icon={faAddressBook} />
        <h4>G-401,Pushpa plaza,Jivdani Road,Virar(E),</h4>
        </div>
        <div className="dist">
          <h4>Palghar,Maharashtra-401305</h4>
        </div>
        </div>
      </div>
  )
}

export default MailList