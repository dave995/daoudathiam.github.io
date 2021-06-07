import React from "react"
import Calendars from "../../../Apprenant/HomePageApp/Aside/Calendars";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

const Aside = () => {
    return(
        
        <Card style={{ width: '20rem', paddingRight: "1px" }}>
                <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title className="text-primary border-bottom">Calendrier</Card.Title>
                <Card.Text>
                    <Calendars />
                </Card.Text>
            </Card.Body>
           
        </Card>
        
    )
}
export default Aside;