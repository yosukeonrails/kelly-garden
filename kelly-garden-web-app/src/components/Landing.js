import React, { Component } from 'react';
import { connect } from 'react-redux';
import schoolImage from '../images/jerry-wang-1223250-unsplash.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="landing">

        <div className="landing-top">

          <h1 id="kelly-garden-logo"> KellyGarden Tutorial </h1>
          <div className="menu">
            <li>About Us</li>
            <li>Programs</li>
            <li>Schedule</li>
            <li>Contact Us</li>
            <i className="material-icons">
				menu
            </i>
          </div>

          <h1>
					Hong Kong's #1 Tutorial center.
          </h1>
          <button>Sign Up Now</button>
        </div>


      </div>
    );
  }
}


export default connect(null, null)(Landing);
