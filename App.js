import React from 'react';
import SearchMovie from './components/SearchMovie';
import './App.css'
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Movie Search App</h1>
        <div className="search-container">
          <SearchMovie />
        </div>
      </div>
    );
  }
}

export default App;
