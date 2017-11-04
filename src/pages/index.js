import React from 'react'
import Link from 'gatsby-link'

import appStoreImg from '../assets/img/app-store.png'
import googlePlayImg from '../assets/img/google-play.png'
import phoneImg from '../assets/img/phone.png'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  handleEmailChange({value}) {
    /**
     * Validate User's input first
     */
    this.setState({
      email: value
    })
  }

  handleSubscribeClick() {
    /**
     * Email is in the state,
     * send it directly to your server
     */
  }

  render () {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 centered">
                <h1>Welcome to our new app site.<br />Sign up now & prepare to enjoy our service.</h1>
                <div className="mtb">
                  <form role="form" action="register.php" method="post" enctype="plain">
                    <input
                      type="email"
                      name="email"
                      className="subscribe-input"
                      placeholder="Enter your e-mail address..."
                      required
                      onChange={({target}) => this.handleEmailChange(target)}
                      />
                    <button
                      className='btn btn-conf btn-green'
                      type="submit"
                      onClick={() => this.handleSubscribeClick()}>Sart your free trial</button>
                  </form>
                </div>
                <h6>30 DAY FREE TRIAL - NO CREDIT CARD NEEDED.</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container ptb">
          <div className="row">
            <div className="col-md-6">
              <h2>All the features you want in this kind of apps you'll got it here.</h2>
              <p className="mt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className="store">
                <a href="#"><img src={appStoreImg} height="50" alt="" /></a>
                <a href="#"><img src={googlePlayImg} height="50" alt="" /></a>
              </p>
            </div>
            <div className="col-md-6">
              <img src={phoneImg} className="img-responsive mt" alt="" />
            </div>
          </div>
        </div>

        <div id="sep">
          <div className="container">
            <div className="row centered">
              <div className="col-md-8 col-md-offset-2">
                <h1>Join your experiences with the people you care more. Let us help you.</h1>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                <p>
                  <button className="btn btn-conf-2 btn-green">
                    Learn More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
