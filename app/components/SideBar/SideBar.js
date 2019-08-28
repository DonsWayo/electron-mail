import React, { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
    <FaBeer /> {number}

    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default class SideBar extends Component {
  constructor() {
    super();
  }




  render() {
    return (
      <div>

      <NumberList/>

      </div>
    );
  }
}
