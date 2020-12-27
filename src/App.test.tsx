import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';

test('demo test', () => {
  render(<Router><App /></Router>);
});

test("When everything is OK", () => {
  render(<Router><App /></Router>)
})