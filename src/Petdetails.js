import React from 'react';
import './App.css';
import Shelter from "./Shelter"
import {
    Link

} from 'react-router-dom';



const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"

// sets the state
class Petdetails extends React.Component {

    constructor(props) {
        super(props)
        this.state =
            {
               
                details: []
                

            }

         
    }
    // api fetch for a single pet by ID (3rd endpoint)
    async componentDidMount() {
       

        const detailsRes = await fetch(`http://api.petfinder.com/pet.get?format=json&key=${APIKEY}&id=${this.props.match.params.shelterPetId}`)
        const json = await detailsRes.json();
        // API returns an array of pets if multiple, else it returns
        // an object. 
        
        Array.isArray(json.petfinder.pet)
        ? this.setState({ details: json.petfinder.pet })
        : this.setState({ details: [json.petfinder.pet] });
            console.log(this.state)




    
    }

    render() {
        return (
         
// returning the pet ID number 
            <div>
            <p> {this.props.match.params.id}  </p>
          <ul> 
    {/* mapping over the returned content from API call and selecting from that list */}
           {this.state.details.map(details =>
           <li key={details.name.$t}>
           {details.name.$t}, {details.age.$t}, {details.sex.$t} <p>{details.description.$t}</p>

          <img src= {details.media.photos.photo[3].$t}></img> 
             
           
           </li>
           )}
           </ul>
        </div>
   );
    
}
}



export default Petdetails;

