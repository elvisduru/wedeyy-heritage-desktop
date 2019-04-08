import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavItem extends React.PureComponent {
  render() {
    return (
      <li>
        <NavLink to={`${this.props.match.url}/${this.props.children}`}>
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

export default withRouter(NavItem);
