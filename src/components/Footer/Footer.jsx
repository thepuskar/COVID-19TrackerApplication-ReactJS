import React from "react";
import "./Footer.style.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="pg-footer">
        <footer className="footer">
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a
                  className="footer-copyright-link"
                  href="https://npooja.now.sh/"
                  target="_self"
                >
                  {" "}
                  ©2020. | Designed and Developed By Puskar Adhikari. | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
