import React, { Component } from 'react';

import './App.css';
import SummaryContainer from './containers/SummaryContainer';
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { fetchItemPricingData } from './store/actions/getItemPricingData';

const store = configureStore();
class App extends Component {
  componentDidMount() {
    store.dispatch(fetchItemPricingData());
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <SummaryContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
