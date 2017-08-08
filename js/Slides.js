import React from 'react';
import Slide from './Slide';

export class Slide1 extends React.Component {
  render() {
    return (
      <Slide title="react-native"
             text="by Marcos Costa"
             firstSlide={true}
             nextSlide="Slide2"
             {...this.props} />
    );
  }
}

export class Slide2 extends React.Component {
  render() {
    return (
      <Slide title="Motivação"
             nextSlide="Slide3"
             {...this.props} />
    );
  }
}

export class Slide3 extends React.Component {
  render() {
    return (
      <Slide title="O que é React-native?"
             nextSlide="Slide4"
             {...this.props} />
    );
  }
}

export class Slide4 extends React.Component {
  render() {
    return (
      <Slide title="O que nele é diferente?"
             nextSlide="Slide5"
             {...this.props} />
    );
  }
}

export class Slide5 extends React.Component {
  render() {
    return (
      <Slide title="Quais as vantagens de utilizá-lo?"
             nextSlide="Slide6"
             {...this.props} />
    );
  }
}

export class Slide6 extends React.Component {
  render() {
    return (
      <Slide title="E quais as desvantagens?"
             nextSlide="Slide7"
             {...this.props} />
    );
  }
}

export class Slide7 extends React.Component {
  render() {
    return (
      <Slide title="Já da pra usar em produção?"
             nextSlide="Slide8"
             {...this.props} />
    );
  }
}

export class Slide8 extends React.Component {
  render() {
    return (
      <Slide title="E o código???"
             lastSlide={true}
             {...this.props} />
    );
  }
}
