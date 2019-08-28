import React, { Component } from 'react';
import { View, TitleBar } from 'react-desktop/macOs';
import styles from './HeaderBar.css';

export default class HeaderBar extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }

  render() {
    return (
      <TitleBar
        title="untitled text 5"
        controls
        transparent={true}
        isFullscreen={this.state.isFullscreen}
        onCloseClick={() => console.log('Close window')}
        onMinimizeClick={() => console.log('Minimize window')}
        onMaximizeClick={() => console.log('Mazimize window')}
        onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
        className={styles.header}
      />
    );
  }
}
