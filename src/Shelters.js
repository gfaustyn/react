import React from 'react';
 import './App.css';

import Input from "./Input"

import {
  Link

} from 'react-router-dom';

// API key from petfinder 
const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class Shelters extends React.Component {
  state = {
    shelters: [], 
    pets: [],
    
    }
    

// makes the API call for andimal shelters by zipcode and prints to the console/ (1st endpoint)
  getPets = async  (zipcode) => {
    const res = await fetch(`http://api.petfinder.com/shelter.find?format=json&key=${APIKEY}&location=${zipcode}`)
    const json = await res.json();
    this.setState({
      shelters: json.petfinder.shelters.shelter})
    console.log(this.state)
  }
 
 
 

  render() {
    return (
       <div>
        <Input loadPets={this.getPets} findPets ={this.findPets} />
        <ul>
        {this.state.shelters.map(shelter => 
        <li key={shelter.id.$t}>
            <Link  to={`/shelters/${shelter.id.$t}`}> {shelter.name.$t} </Link> 
        </li>
        )} 
        </ul>
      </div>
    )
    
  }
}

export default Shelters;
