import React from 'react'
import Link from 'gatsby-link'

import client1Img from '../assets/img/client1.png'
import client3Img from '../assets/img/client3.png'
import client2Img from '../assets/img/client2.png'
import client4Img from '../assets/img/client4.png'
import client5Img from '../assets/img/client5.png'

const Pricing = () => (
  <div>
    <div className="container ptb">
      <div className="row centered">
        <h2 className="mb">Our Pricing Model<br />It's Quite Easy To Understand.</h2>
        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              Standard
            </div>
            <div className="p-body">
              <ul className="features">
                <li>10GB Storage Space</li>
                <li>Free Support</li>
                <li>100 Users</li>
                <li>100GB Bandwith</li>
              </ul>
              <div className="price">
                <span className="sub">$</span>
                <span className="detail">29</span>
                <span className="sub">/mo.</span>
              </div>
              <button className="btn btn-conf-2 btn-green">Subscribe Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              Business
            </div>
            <div className="p-body">
              <ul className="features">
                <li>50GB Storage Space</li>
                <li>Free Support</li>
                <li>500 Users</li>
                <li>500GB Bandwith</li>
              </ul>
              <div className="price">
                <span className="sub">$</span>
                <span className="detail">49</span>
                <span className="sub">/mo.</span>
              </div>
              <button className="btn btn-conf-2 btn-green">Subscribe Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="price-table">
            <div className="p-head">
              Corporate
            </div>
            <div className="p-body">
              <ul className="features">
                <li>100GB Storage Space</li>
                <li>Free Support</li>
                <li>10,000 Users</li>
                <li>3TB Bandwith</li>
              </ul>
              <div className="price">
                <span className="sub">$</span>
                <span className="detail">89</span>
                <span className="sub">/mo.</span>
              </div>
              <button className="btn btn-conf-2 btn-green">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="g">
      <div className="container">
        <div className="row sponsor centered">
          <div className="col-sm-2 col-sm-offset-1">
            <img src={client1Img} alt="" />
          </div>
          <div className="col-sm-2">
            <img src={client3Img} alt="" />
          </div>
          <div className="col-sm-2">
            <img src={client2Img} alt="" />
          </div>
          <div className="col-sm-2">
            <img src={client4Img} alt="" />
          </div>
          <div className="col-sm-2">
            <img src={client5Img} alt="" />
          </div>
        </div>
      </div>
    </div>

    <div id="green">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 centered">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

              <div className="carousel-inner">
                <div className="item active">
                  <h3>I enjoyed so much the last edition of Landing Sumo, that I bought the tickets for the new one edition of the event the first day.</h3>
                  <h5>DAVID JHONSON</h5>
                </div>
                <div className="item">
                  <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
                  <h5>MARK LAWRENCE</h5>
                </div>
                <div className="item">
                  <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour.</h3>
                  <h5>LISA SMITH</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
