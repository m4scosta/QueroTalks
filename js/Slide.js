import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class Slide extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {this.renderTitle()}
        {this.renderText()}
        {this.renderArrows()}
      </View>
    );
  }

  renderTitle() {
    if (this.props.title) {
      return (
        <Text style={styles.title}>{this.props.title}</Text>
      );
    }
  }

  renderText() {
    if (this.props.text) {
      return (
        <Text style={styles.text}>{this.props.text}</Text>
      );
    }
  }

  renderArrows() {
    var leftArrow, rightArrow;
    if (!this.props.firstSlide) {
      leftArrow = <Text style={styles.arrow} onPress={() => this.goToPrevSlide()}>{"<"}</Text>;
    } else {
      leftArrow = <Text style={[styles.arrow, styles.arrowDisabled]}>{"<"}</Text>;
    }
    if (!this.props.lastSlide) {
      rightArrow = <Text style={styles.arrow} onPress={() => this.goToNextSlide()}>{">"}</Text>;
    } else {
      rightArrow = <Text style={[styles.arrow, styles.arrowDisabled]}>{">"}</Text>;
    }
    return (
      <View style={styles.arrowsContainer}>
        {leftArrow}
        {rightArrow}
      </View>
    );
  }

  goToPrevSlide() {
    this.props.navigation.goBack();
  }

  goToNextSlide() {
    const { navigate } = this.props.navigation;
    navigate(this.props.nextSlide);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44a0dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  arrowsContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  arrowDisabled: {
    color: 'lightgray',
  },
});
