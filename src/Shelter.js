import React from 'react';
import './App.css';
import Pets from "./Pets"
import Input from "./Input"

import {
    Link

} from 'react-router-dom';



const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class Shelter extends React.Component {

    constructor(props) {
        super(props)
        this.state =
            {
                pets: [],
                shelter: []

            }
    }
    async componentDidMount() {
        const shelterResponse = await fetch(`http://api.petfinder.com/shelter.get?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const shelterJson = await shelterResponse.json()

        // this.setState({ shelter: json.petfinder.shelter.$t })

        const res = await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const json = await res.json();
        this.setState({ pets: json.petfinder.pets.pet })
        console.log(this.state)
    }

    render() {
       
        return (
            
            <div>
                <p> {this.props.match.params.id}  </p>
                <ul> 
                {this.state.pets.map(pets =>
                <li key={pets.name.$t}>{pets.name.$t}, {pets.age.$t}, <p>{pets.description.$t}</p>
                  
                
                </li>
                )}
                </ul>

            </div>
        );
    }
}


export default Shelter;
// const api_call =
    //   await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${apiKey}&id=${this.loadPets}`);
