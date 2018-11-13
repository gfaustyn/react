import React from 'react';

const APIKEY = "c42f6b4fc6a776412cc0a693ce4f40d6"


class Input extends React.Component{
 
    constructor(props) {
        super(props)
        this.state =
            {
               random: []

            }
    }

    onZipUpdate = (e) => {
        this.setState({zipcode: e.target.value})
    }

    onFormSubmit = (e) => {
      e.preventDefault();
       this.props.loadPets(this.state.zipcode)
    }
    async randomPet() {
    const randomRes = await fetch (`http://api.petfinder.com/pet.getRandom?format=json&key=${APIKEY}`)
    const randomJson = await randomRes.json();
    this.setState ({random: randomJson.petfinder.petsIds})
    console.log(this.state)
    }
 
  
    render(){
            return(
                <form onSubmit={this.onFormSubmit}>
                     <input type="text" name="zipcode" placeholder="Zip Code.." onInput={this.onZipUpdate}/> 
                    <button> Find Shelters in your area! </button>
                    {/* <p> or </p>
                   */}
                    {/* <button onClick={this.setState}>
            Find a Random Pet!
          </button> */}

                   
                </form>
        )
    }
}
export default Input;