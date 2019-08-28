import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import PTList from './components/personality-type/PTList'
import PTDesc from './components/personality-type/PTDesc';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/pt-list' component={PTList}></Route>
          <Route path='/pt-desc' component={PTDesc}></Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
