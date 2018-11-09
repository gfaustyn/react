import React from 'react';
// prints shelter name, email and phone number from API to page 
const Pets = (props) => {
  return (
    <div>
      {/* {props.shelters.map(shelter => <p>Shelter Information: {shelter.name.$t}, {shelter.phone.$t}, {shelter.email.$t}</p>)} */}
      {props.pets.map(pets => <p>Available Pets: {pets.pet.breed.$t}, {pets.pet.sex.$t}, {pets.pet.name.$t}</p>)}
      
      </div>
  )
};
export default Pets;