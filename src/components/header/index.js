import React, { useState, useCallback, useEffect, useRef } from "react";
import HeaderChild from './HeaderChild';

import "./styles.css";
import { Link } from "react-router-dom";

// export default class Header extends React.Component {
//   state = {
//     counter: 0,
//     hideCounter: false,
//   };

//   componentDidCatch() {

//   }

//   componentDidMount() {
//     console.log("ParentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("ParentDidUpdate");
//   }

//   increaseCount = () => {
//     this.setState(
//       (state) => ({ ...state, counter: state.counter + 1 }),
//       () => console.log("state updated!")
//     );
//   };

//   decreaseCount = () => {
//     this.setState(
//       (state) => ({ ...state, counter: state.counter - 1 }),
//       () => console.log("state updated!")
//     );
//   };

//   hideCounter = () => {
//     this.setState(state => ({hideCounter: !state.hideCounter}));
//   };

//   render() {
//     return (
//       <header className="header">
//         header
//         {!this.state.hideCounter && (
//           <HeaderChild counter={this.state.counter} />
//         )}
//         <button onClick={this.increaseCount}>increase</button>
//         <button onClick={this.decreaseCount}>decrease</button>
//         <button onClick={this.hideCounter}>hide</button>
//       </header>
//     );
//   }
// }

export default function Header(props) {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </header>
  );
}
