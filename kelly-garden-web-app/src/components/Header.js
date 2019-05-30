import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
    return (
      <div className="landing-header">
        <h1 id="kelly-garden-logo"> Mrs Kelly's Garden</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});
export default connect(null, null)(Header);
