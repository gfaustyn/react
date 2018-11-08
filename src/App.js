import React from 'react';
import './App.css';
import Pets from "./Pets"
import Titles from "./Titles"
import Input from "./Input"


const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class App extends React.Component {
  state = {
    shelters: [],   
    pets: ""
    }

// makes the API call and prints to the console/
  getPets = async  (zipcode) => {
    const res = await fetch(`http://api.petfinder.com/shelter.find?format=json&key=${APIKEY}&location=${zipcode}`)
    const json = await res.json();
    this.setState({
      shelters: json.petfinder.shelters.shelter})
    console.log(this.state)
  }
  // // findPets = async (zipcode) => { 
  //   const res = await fetch (`http://api.petfinder.com/shelter.getPets?format=json&key=${APIKEY}&id=${zipcode}`)
  //   const json = await res.json();
  //   this.setState({pets: json.petfinder.pets.pet})
  //   console.log(this.state)
  // }
 
 

  render() {
    return (
       <div>
        <Input loadPets={this.getPets && this.findPets} />
        <Titles   shelters={this.state.shelters && this.state.pets} />
        <Pets shelters = {this.state.shelters && this.state.pets} />
      </div>
    )

  }
}

export default App;
// const api_call =
    //   await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${apiKey}&id=${this.loadPets}`);
