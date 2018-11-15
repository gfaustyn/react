import React from 'react';


import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from 'reactstrap';

import {
    Link

} from 'react-router-dom';
// imported code from reactstrap to have pets displayed in a card style format 
const Pet = (props) => {
  return (
    <div>
        <Card key={props.name}>
        {/* router link */}
        <Link  to={`/pet/${props.shelterPetId}`}>   
            <CardImg src={props.image} />
            <CardBody>
                <CardTitle>
                    {props.name}
                </CardTitle>
                <CardSubtitle>
                    {props.age}
                </CardSubtitle>
                <CardText>
                    {props.description}
                </CardText>
            </CardBody>
            </Link> 
        </Card>
      </div>
  )
};
export default Pet;