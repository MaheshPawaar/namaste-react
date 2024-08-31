import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const Grocery = lazy(() => import('./components/Grocery'));

/**
 * Header
 * - Logo
 * - Nav Items (Right Side)
 * - Cart
 *
 * Body
 * - Search
 * - Restaurant List
 *  - Restaurant Card
 *    - Image
 *    - Name
 *    - Rating
 *    - cusines
 *
 * Footer
 * - Links
 * - Copyright
 * */

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Mahesh Pawar",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
