import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from '../components/pages/MyProfile';
import store from '../redux/store';
import { it, expect } from '@jest/globals';

it('renders correctly', () => {
  const missions = [
    { id: 1, mission_name: 'Mission 1', reserved: true },
    { id: 2, mission_name: 'Mission 2', reserved: false },
    // Add more mission objects as needed
  ];
  const rockets = [
    { id: 1, rocket_name: 'Mission 1', reserved: true },
    { id: 2, rocket_name: 'Mission 2',  reserved: false },
    // Add more mission objects as needed
  ];

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <MyProfile missions={missions} rockets={rockets} />
      </BrowserRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
