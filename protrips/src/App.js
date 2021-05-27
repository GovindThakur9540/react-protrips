import React, { useState } from 'react'
import './App.css';
import './components/HomeComponent/Home.css';
import Home from './components/HomeComponent/Home'
import AddTrip from './components/AddTripComponent/AddTrip'
import List from './components/ListComponent/List'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {
  const [trips, setTrips] = useState('');

  const handleCallback = (childData) => {
    console.log('handle call back');
    setTrips(childData)
    console.log("Data from child", childData);
  }


  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <button>
            <Link className="icon" to="/"><i className='fas fa-home'></i> </Link>
          </button>
          <button>
            <Link className="icon" to="/addTrip"><i className='far fa-calendar-plus'></i></Link>
          </button>
          <button>
            <Link className="icon" to="/showTrips"><i className="fa fa-table" aria-hidden="true"></i></Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Home trips={trips} />
          </Route>
          <Route path="/addTrip">
            <AddTrip parentCallback={handleCallback} />
          </Route>
          <Route path="/showTrips">
            <List trips={trips} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;