import React from 'react';
import './App.css';

import Pet from "./Pet"

// import {
//     Link
   
// } from 'react-router-dom';
import {
    CardColumns
} from 'reactstrap';


const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class Shelter extends React.Component {

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
        const shelterResponse = await fetch(`http://api.petfinder.com/shelter.get?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const shelterJson = await shelterResponse.json()

        // this.setState({ shelter: json.petfinder.shelter.$t })

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