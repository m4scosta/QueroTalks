import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableHighlight
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
      leftArrow = (
        <TouchableHighlight onPress={() => this.goToPrevSlide()}
                            underlayColor="rgba(255, 255, 255, 0.1)">
          <Image style={styles.arrowImg}
                 source={require('../assets/arrow-left-enabled.png')} />
        </TouchableHighlight>
      );
    } else {
      leftArrow = <Image style={styles.arrowImg}
                         source={require('../assets/arrow-left-disabled.png')} />
    }
    if (!this.props.lastSlide) {
      rightArrow = (
        <TouchableHighlight onPress={() => this.goToNextSlide()}
                            underlayColor="rgba(255, 255, 255, 0.1)">
          <Image style={styles.arrowImg}
                 source={require('../assets/arrow-right-enabled.png')} />
        </TouchableHighlight>
      );
    } else {
      rightArrow = <Image style={styles.arrowImg}
                          source={require('../assets/arrow-right-disabled.png')} />
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
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  arrowsContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowImg: {
    height: 50,
    resizeMode: 'contain',
  },
});
