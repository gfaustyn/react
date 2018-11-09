import React from 'react';
import './App.css';
import Pets from "./Pets"
import Titles from "./Titles"
import Input from "./Input"
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
       <div>

          <BrowserRouter> 
            <Switch>
              
                <Route exact path="/" component={Shelters} />
                <Route path="/shelters/:id" render={props=>
                  (<Shelter key={props.match.params.id} {...props}/>) }/>
                  <Route path="/shelters" component={Shelters} />
                  <Route path="/shelter" component={Shelter}/>
                  <Route path="/shelter/:id" render={props => 
                  (<Shelter key={props.params.pets}{...props}/>)}/>
               </Switch>  
          </BrowserRouter>
        
       
      </div>
    )

  }
}

export default App;
// const api_call =
    //   await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${apiKey}&id=${this.loadPets}`);
