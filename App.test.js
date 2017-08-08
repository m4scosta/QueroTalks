import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


it('renders the correct content', () => {
  const slides = renderer.create(<App />).toJSON();
  expect(slides).toMatchSnapshot();
});
