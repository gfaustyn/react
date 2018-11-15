import React from 'react';
import './App.css';
import Pet from "./Pet"

import {
    CardColumns
} from 'reactstrap';


const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"

// sets the state for the search
class Shelter extends React.Component {

    constructor(props) {
        super(props)
        this.state =
            {
                
                pets: [],
                shelter: [],
                details: [],
             

            }
    
    }

    // makes API call for list of animals in shelter by shelter ID (2nd endpoint)
    async componentDidMount() {

        const res = await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const json = await res.json();
        // API returns an array of pets if multiple, else it returns
        // an object. 
        Array.isArray(json.petfinder.pets.pet)
            ? this.setState({ pets: json.petfinder.pets.pet })
            : this.setState({ pets: [json.petfinder.pets.pet] });
            console.log(this.state)
    }
         
    

        render() {       
            return (            
                <div>
                    <h1>{this.props.match.params.id}</h1>
                    
                    <CardColumns>
                        {/* mapping over the returned content from API call and selecting from that list */}
                        
                        {this.state.pets.map(pet =>
                            <Pet key={pet.name.$t} 
                                name={pet.name.$t} 
                                shelterPetId={pet.id.$t}
                                
                               image={pet.media.photos.photo[3].$t} />
                               
                        )}
                        
                            
             
                    </CardColumns>
                </div>
            );
        }
    }   



export default Shelter;

{/* // <Link to={`/pets/${pets.name.$t}`}> {pets.name.$t}, {pets.id.$t}  </Link> */}