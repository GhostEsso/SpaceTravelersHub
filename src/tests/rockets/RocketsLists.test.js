import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import RocketsLists from '../../components/rockets/RocketsLists'; // Update the import path and component name

test('renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <RocketsLists />
      </BrowserRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
