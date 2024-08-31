import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('should load header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button');
  expect(loginButton).toBeInTheDocument;
});
