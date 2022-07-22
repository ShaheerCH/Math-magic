import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Screen';
import HomeView from '../components/Home';
import Calculator from '../components/Calculator'

describe('navbar component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Navbar /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('home view', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<BrowserRouter> <HomeView /> </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('home view', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(<BrowserRouter> <Calculator/> </BrowserRouter>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });