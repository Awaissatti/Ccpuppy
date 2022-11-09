import React from "react";
import "./Home.css";
import ImgE from "../Images/glossary.png";

export default function Glossary() {
  return (
    <div>
      <div className="bg">
        <div className="Tab"></div>
        <div className="bg">
          <div className="container main">
            <nav class="navbar navbar-expand-lg navbar-light">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link new active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      ROADMAP
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      MINT A PUPPY
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      'HOW TO...' GUIDES
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          CONNECT TO METAMASK
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          MINT AND SEE YOUR PUP
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          GLOSSARY OF TERMS
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          FAQS
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      THE TOP DOGS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link new1" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <hr className="line" />
        <div className="bg"></div>
        <div className="background">
          <div className="text-center pt-5">
            <img className="w-100 glossary" src={ImgE} />
                  </div>
                  <div className="container">
                      <div className="row pt-5 pb-5">
                          <div className="col-md-4">
                          <p className="list">
                                  <li>CRYPTO TECHNOLOGY</li>
                                  <li>BITCOIN</li>
                                  <li>ETH</li>
                                  <li>GAS</li>
                                  <li>METAMASK</li>
                                  <li>MINT</li>
                                  <li>NFT</li>
                                  <li>OPENSEA</li>
                              </p>
                          </div>
                          <div className="col-md-4">
                             
                          </div>
                          <div className="col-md-4"></div>
                      </div>
                  </div>
        </div>
        {/* FOOTER */}
        <div className="bg">
          <div className="container">
            <div className="row pt-3">
              <div className="col-md-2"></div>
              <div className="col-md-8 subscribe">
                <h2 class="subscribe__title">JOIN THE PACK</h2>
                <p class="subscribe__copy">
                  Subscribe to the <b className="tran">Curious Cryptos Ltd </b>
                  <br />
                  mailing list for all things crypto...
                </p>
                <div class="form">
                  <input
                    type="email"
                    class="form__email"
                    placeholder="e.g.puppy@kennel.com"
                  />
                  <button class="form__button">JOIN</button>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row pt-4 pb-4">
              <div className="col-md-4 text-center">
                <span className="text">TERMS AND CONDITIONS</span>
              </div>
              <div className="col-md-4 text-center">
                <p className="litt">©2022 Curious Cryptos Ltd.</p>
              </div>
              <div className="col-md-4 text-center">
                <span className="text">PRIVACY POLICY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
