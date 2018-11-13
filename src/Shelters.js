import React from 'react';
 import './App.css';
import Petdetails from "./Petdetails"
import Titles from "./Titles"
import Input from "./Input"
import Pet from "./Pet"


import {
  Link

} from 'react-router-dom';



const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"



class Shelters extends React.Component {
  state = {
    shelters: [], 
    pets: []  
    
    }
    

// makes the API call and prints to the console/
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
// const api_call =
    //   await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${apiKey}&id=${this.loadPets}`);
     {/* <Titles shelters={this.state.shelters} pets ={this.state.pets} />
        <Pets shelters = {this.state.shelters} pets={this.state.pets} /> */}
