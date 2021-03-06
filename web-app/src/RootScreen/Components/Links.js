import React from "react";
import { SiYoutube } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";

const Links = () => {
  return (
    <div>
      <header id="mu-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="mu-header-area">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mu-header-top-right">
                      <nav>
                        <ul className="mu-top-social-nav">
                          <li>
                            <a
                              className="IconLinks"
                              target="_blank"
                              href="https://web.facebook.com/NABI-BUKSH-Academy-107987387289031"
                              rel="noreferrer"
                            >
                              <ImFacebook2 />
                            </a>
                          </li>
                          <li>
                            <a
                              className="IconLinks"
                              target="_blank"
                              href="https://twitter.com/infoashrafia7?s=09"
                              rel="noreferrer"
                            >
                              <FaTwitterSquare />
                            </a>
                          </li>
                          <li>
                            <a
                              className="IconLinks"
                              target="_blank"
                              href="https://instagram.com/syed_jamal_ashraf_official?utm_medium=copy_link"
                              rel="noreferrer"
                            >
                              <GrInstagram />
                            </a>
                          </li>
                          <li>
                            <a
                              className="IconLinks"
                              target="_blank"
                              href="https://youtube.com/channel/UC6Rs9c3zZgvYwDq9m2T3smQ"
                              rel="noreferrer"
                            >
                              <SiYoutube />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Links;
