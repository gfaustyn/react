import React from 'react';
import './App.css';
import Shelter from "./Shelter"


import {
    Link

} from 'react-router-dom';



const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class Petdetails extends React.Component {

    constructor(props) {
        super(props)
        this.state =
            {
                pets: [],
                shelter: [],
                details: []
                

            }

         
    }
    async componentDidMount() {
       

        const detailsRes = await fetch(`http://api.petfinder.com/pet.get?format=json&key=${APIKEY}&id=${this.props.match.params.shelterPetId}`)
        const json = await detailsRes.json();
        this.setState({details: json.petfinder.pet})
            console.log(this.state)




    
    }

    render() {
        return (
           <div>
            <p> {this.props.match.params.shelterPetId}</p>
           </div>
    );
}
}

    

export default Petdetails;