import * as React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './Frontend/Components/HomePage';
import { NavBar } from './Frontend/Components/NavBar';
import configureStore from './Frontend/Store/index';
import { initialState } from './Frontend/Reducers/rootReducer';
import { Route, HashRouter } from 'react-router-dom';
import { About } from './Frontend/Components/About';
import { Gallery } from './Frontend/Components/Gallery';
import { Checkout } from './Frontend/Components/Checkout';

const store = configureStore(initialState);

class App extends React.Component {
  render() {
    console.log(HomePage);
    return (
      <Provider store={store}>
        <HashRouter>
          <>
            <NavBar />      
            <Route exact={true} path="/" component={HomePage}/>
            <Route path="/about" component={About}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/checkout" component={Checkout}/>
          </>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;