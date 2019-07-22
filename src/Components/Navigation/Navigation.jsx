import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink/NavLink.jsx';
import  './Navigation.css';


const Navigation = ( props ) => (
  <div>
    <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
      <li className="grid-cell">
        <Link className="navigation-link navigation-brand" to="/">
          Home
        </Link>
      </li>
      <li className="grid-cell">
        <Link className="navigation-link navigation-brand" to="/login">
          Login
        </Link>
      </li>
      <li className="grid-cell">
        <Link className="navigation-link navigation-brand" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;

// const Navigation = () => {
//
//   return (
//     <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
//       <li className="grid-cell">
//         <Link className="navigation-link navigation-brand" to="/">
//           Home
//         </Link>
//       </li>
//       <li className="grid-cell">
//         <Link className="navigation-link navigation-brand" to="/login">
//           Login
//         </Link>
//       </li>
//       <li className="grid-cell">
//         <Link className="navigation-link navigation-brand" to="/about">
//           About
//         </Link>
//       </li>
//     </ul>
//   );
// };
//
// export default Navigation;
