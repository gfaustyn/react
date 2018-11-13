import React from 'react';
import './App.css';


// import {
//     Link

// } from 'react-router-dom';



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
        const shelterResponse = await fetch(`http://api.petfinder.com/shelter.get?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const shelterJson = await shelterResponse.json()
        this.setState({ shelter: json.petfinder.shelter.$t })

        const res = await fetch(`http://api.petfinder.com/shelter.getPets?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
        const json = await res.json();
        

     const detailsRes = await fetch(`http://api.petfinder.com/pet.get?format=json&key=${APIKEY}&id=${this.props.match.params.id}`)
     const detailsJson = await detailsRes.json();
     this.setState({details: json.petfinder.pets.options.option})
     console.log(this.state)




    
    }

    render() {
        return(
           
           <div>
            <p> {this.props.match.params.id}  </p>
           <ul> 
           {this.state.options.map(options =>
           <li key={options.name.$t}>{options.name.$t}, {options.age.$t}, <p>{options.description.$t}</p>
             
           
           </li>
           )}
           </ul>
        </div>
   );
}
}

    

export default Petdetails;