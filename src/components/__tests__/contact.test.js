import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Page Testcases', () => {
  it('Should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside contact component', () => {
    render(<Contact />);

    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });

  it('Should load input name inside contact component', () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText('Name');
    expect(name).toBeInTheDocument();
  });

  it('Should load 2 inputs inside contact component', () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
  });
});
