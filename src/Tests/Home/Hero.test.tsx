import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom"
import Hero from "../../Components/Home/Hero"



describe("Home Component", () => {

  beforeEach(() => {
    render(<Router><Hero /></Router>);
})

test('renders slogan', () => {
    expect(screen.getByText("Increase your revenue by $1000's with BlueReceipt Texts.")).toBeInTheDocument()
});

test('renders action button', () => {
    expect(screen.getByText("Start Sending Texts")).toBeInTheDocument()
});

test('renders disclaimer', () => {
    expect(screen.getByText("Get Started Now - No Credit Card Necessary")).toBeInTheDocument()
});

})
