import { Component } from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import WinePage from './pages/WinePage.js'
import AddWinePage from './pages/AddWinePage.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <HashRouter>
          <div>
            
            <Route exact path="/add-wine" component={AddWinePage} />
            <Route exact path="/wines/:wineID" component={WinePage} />
            <Route exact path="/" component={HomePage} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App