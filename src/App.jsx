import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux'
import store from './store';
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App" >
          Clean App
          <Counter value={store.getState().counter.value}/>
        </div>
      </Provider>
    );
  }
}

export default App;