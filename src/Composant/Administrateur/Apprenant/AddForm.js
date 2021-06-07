
import React, { useState, useContext, useEffect } from 'react';
import { Form, Button  } from 'react-bootstrap';
import { FirebaseContext } from "../../Firebase";
import * as ROUTES from '../../../Constant/routes';






function AddForm(props) {

    const firebase  = useContext(FirebaseContext)
    console.log(firebase)

    const data = {
        nom:"",
        prenom:"",
        email:"",
        mobile:"",
        password:""
    }

    const [apprenant, SetApprenant ] = useState(data)
    
    const { nom, prenom, email, mobile, password } = data;

    const handleChange = e =>{
        SetApprenant({...apprenant, [e.target.name]:e.target.value})
    }




    const handleSubmit = e =>{
        e.preventDefault()
        const { nom, prenom, email, mobile } = data;
        firebase.signUpser(email, password)
       
        .then(()=>{
            SetApprenant({...data})
            props.history.push(ROUTES.ADMIN)
        })
        .catch( error =>{
            console.log(error)
        })
    }


    return (
        <>
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control type="text" name="nom" defaultValue={ nom } placeholder="Nom *" onChange={(e)=>handleChange(e)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                    type="text"
                    name="prenom"
                    defaultValue={prenom}
                    onChange={handleChange}
                    placeholder="Prenom *">
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                    type="email"
                    name="email"
                    defaultValue={email}
                    onChange={handleChange}
                    placeholder="Email *">
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                    type="text"
                    name="mobile"
                    defaultValue={mobile}
                    onChange={handleChange}
                    placeholder="Telephone *">
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                    type="password"
                    name="password"
                    defaultValue={password}
                    onChange={handleChange}
                    placeholder="Mot de passe *">
                    </Form.Control>
                </Form.Group>
                <Button variant="success">
                    Ajouter
                </Button>
            </Form>
        </>
    );
}

export default AddForm;