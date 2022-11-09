import React from "react";

export default function Contact() {
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
        <div className="bg">
          <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
              <div class="col-xl-4 col-lg-8 col-md-9 col-11 text-center">
              
                <div class="card">
                
                  <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          First name<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder=""
                          onblur="validate(1)"
                        />{" "}
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Last name<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder=""
                          onblur="validate(2)"
                        />{" "}
                      </div>
                    </div>
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-12 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                           Email<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          onblur="validate(3)"
                        />{" "}
                      </div>
                      {/* <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Phone number<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="mob"
                          name="mob"
                          placeholder=""
                          onblur="validate(4)"
                        />{" "}
                      </div> */}
                    </div>
                    {/* <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Job title<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="job"
                          name="job"
                          placeholder=""
                          onblur="validate(5)"
                        />{" "}
                      </div>
                    </div> */}
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-12 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                         Write a message
                          <span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="ans"
                          name="ans"
                          placeholder=""
                          onblur="validate(6)"
                        />{" "}
                      </div>
                    </div>
                    <div class="row justify-content-start">
                      <div class="form-group col-sm-6">
                        {" "}
                        <button type="submit" class="btn-block btn-primary">
                          Submit
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
