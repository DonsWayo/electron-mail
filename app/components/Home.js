// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import HeaderBar from './HeaderBar/HeaderBar';
import SideBar from './SideBar/SideBar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
       <HeaderBar/>
       <SideBar/>
      </div>
    );
  }
}
