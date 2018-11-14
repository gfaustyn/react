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

const Pet = (props) => {
  return (
    <div>
        <Card key={props.name}>
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