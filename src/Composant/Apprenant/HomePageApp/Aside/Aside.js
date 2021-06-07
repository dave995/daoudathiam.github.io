import React from 'react';
//import Calendars from './Calendars';
import AboutTeacher from './AboutTeacher';
import Statistique from './Statistique';
import CalendarCard from './CalendarCard';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

const Aside = () => {
    return(
      

<Card style={{ width: '17rem', marginRight: "14px", paddingRight: "3px" }}>
<Card.Img variant="top"  />
<Card.Body>
<Card.Title className="text-success border-bottom">Developpeur web</Card.Title>
<Card.Text>
    <AboutTeacher />
    <hr className="bg-white"/>

   

</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
   <center>Groupe DTS 
    Dev 2021</center> 
<ListGroup.Item>
    Juin 2021
</ListGroup.Item>
<ListGroup.Item>
   Dave Thiam
   <br/>
   <br/>
   Jean roland
   <br/>
   <br/>
   Ahmed Sy
   <br/>
   <br/>
   André Silva
   <br/>
   <br/>
   Frederic Mendy

</ListGroup.Item>

</ListGroup>

</Card>
    )
}

export default Aside;