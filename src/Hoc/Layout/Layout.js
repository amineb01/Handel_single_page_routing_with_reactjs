
import Navigation from '../../Components/Navigation/Navigation.jsx';

import React, { PropTypes } from 'react';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
