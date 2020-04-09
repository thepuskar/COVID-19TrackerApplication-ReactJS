import React from "react";
import "./Footer.style.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a
                className="footer-copyright-link"
                href="https://twitter.com/dev_puskar_"
                target="_self"
              >
                {" "}
                ©{new Date().getFullYear()} | Designed and Developed By Puskar
                Adhikari. | All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
