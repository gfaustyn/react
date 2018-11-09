import React from 'react';


class Input extends React.Component{
    

    onZipUpdate = (e) => {
        this.setState({zipcode: e.target.value})
    }

    onFormSubmit = (e) => {
      e.preventDefault();
       this.props.loadPets(this.state.zipcode)
    }

    render(){
            return(
                <form onSubmit={this.onFormSubmit}>
                     <input type="text" name="zipcode" placeholder="Zip Code.." onInput={this.onZipUpdate}/> 
                    <button> Find Shelters! </button>
                </form>
        )
    }
}
export default Input;