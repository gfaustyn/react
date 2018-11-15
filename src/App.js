import React from 'react';
import './App.css';
import Petdetails from "./Petdetails"
import Pet from "./Pet"
import Shelters from "./Shelters"
import Shelter from "./Shelter"

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';




class App extends React.Component {


  render() {
    return (
      // route and links 
      <div>

        <BrowserRouter>
          <Switch>

         <Route path="/shelters/:id" render={props =>
       (<Shelter key={props.match.params.id}{...props} />)} />
   <Route path="/pet/:shelterPetId" render={props =>
       (<Petdetails key={props.match.params.shelterPetId}{...props} />)} />
   <Route exact path="/" component={Shelters} />
   <Route path="/shelter" component={Shelters} />
   <Route path="/pet" component={Shelters}/>
          </Switch>
        </BrowserRouter>


      </div>
    )

  }
}

export default App;
// const api_call =
    //   await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${apiKey}&id=${this.loadPets}`);