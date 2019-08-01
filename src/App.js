import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import CharactersContainer from './components/pages/Characters/CharactersContainer'
import About from './components/pages/About/About'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={CharactersContainer} />
        <Route path='/about' component={About} />
      </Switch>

    </div>
  );
}

export default App;
