import React from 'react';
import Animals from "./Animals.jpg"




class Input extends React.Component{
 

    // allows user to in put zipcode and searches by zipcode

    onZipUpdate = (e) => {
        this.setState({zipcode: e.target.value})
         }

   

    onFormSubmit = (e) => {
      e.preventDefault();
       this.props.loadPets(this.state.zipcode)
   
    }

// returns user input data 
  
    render(){
            return(
                <form onSubmit={this.onFormSubmit}>
                <h1> Shelter Search </h1>
                     <input type="text" name="zipcode" placeholder=" Enter your Zip Code.." onInput={this.onZipUpdate}/>
                    <button> Find shelters pets in your area! </button>
                    <div >
                     <img className="Animals" src ={Animals}/>
                     </div>  

            
                   
                </form>

                
        )
    }
}
export default Input;