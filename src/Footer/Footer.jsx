import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import "../CSS/Footer/footer.css";

export default function Footer() {
  const [filterData, setFilterData] = useState([]);
  const [wordInput, setWordInput] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordInput(searchWord);

    if (searchWord === "") {
      setFilterData([]);
    }
  };

  function clearData() {
    setFilterData([]);
    setWordInput("");
  }

  return (
    <>
      <div className="main_footer">
        <div className="footer_left">
          <div className="footer_logo"></div>
          <div className="Footer_social">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <BiLogoGmail />
            </a>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_company">
            <h3>Company</h3>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </div>
          <div className="footer_support">
            <h3>Support</h3>
            <li>Terms of Service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
          </div>
          <div className="footer_email">
            <h2>Any Question?</h2>
            <div className="search-input">
              <input
                type="text"
                placeholder="Ask Questions"
                value={wordInput}
                onInput={handleFilter}
              />
              {filterData.length === 0 ? (
                <span class=" searchBtn"><LuSend /></span>
              ) : (
                <span
                  class=" close-btn"
                  onClick={clearData}
                >
                  close
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
