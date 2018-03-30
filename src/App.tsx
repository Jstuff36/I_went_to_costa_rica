import * as React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './Frontend/Components/HomePage';
import configureStore from './Frontend/Store/index';
import { initialState } from './Frontend/Reducers/rootReducer';

const store = configureStore(initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    );
  }
}

export default App;