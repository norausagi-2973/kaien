import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    // padding: 15,
    width: 100,
    // minHeight: 100,
    color: '#fff',
  },
  slide1: {
    // backgroundColor: '#FEA900',
    width: 100,
  },
  slide2: {
    // backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
};

class App extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex} interval={4000}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}><img src="./photo/slide1.jpeg" alt=" "></img></div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}><img src="./photo/slide2.jpeg" alt=" "></img></div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}><img src="./photo/slide3.jpeg" alt=" "></img></div>
        </AutoPlaySwipeableViews>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.0001598997715!2d139.567597716179!3d35.28112228028946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601846f8b6963fbd%3A0xe5a369f33218995a!2z44CSMjQwLTAxMTIg56We5aWI5bed55yM5LiJ5rWm6YOh6JGJ5bGx55S65aCA5YaF77yS77yQ77yU!5e0!3m2!1sja!2sjp!4v1616741356514!5m2!1sja!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>
    );
  }
}

export default App;
