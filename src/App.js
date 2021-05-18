import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import ProfileContainer from './components/ProfileContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProfileContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
