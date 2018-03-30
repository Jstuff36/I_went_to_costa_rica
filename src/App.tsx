import * as React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './Frontend/Components/HomePage';
import { NavBar } from './Frontend/Components/NavBar';
import configureStore from './Frontend/Store/index';
import { initialState } from './Frontend/Reducers/rootReducer';

const store = configureStore(initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <NavBar/>
          <HomePage/>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;