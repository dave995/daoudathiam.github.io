import React, { useState, useContext, Fragment} from "react"
import { Form, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../Firebase";
import * as ROUTES from '../../../Constant/routes';






const SignUpPage = (props) => {


    const firebase  = useContext(FirebaseContext)


    const data = {
        nom:"",
        prenom:"",
        email:"",
        password:"",
        confirmPassword:""
      }
    
     const [ loginData, setLoginData] = useState(data)
    const [ error, setError ] = useState("")
    
    
    const handleChange = (e)=>{
      setLoginData({...loginData, [e.target.name]: e.target.value})
    }
    
    
    const handleSubmit = e =>{
      e.preventDefault();
      const {email, password} = loginData;
      firebase.signUpser(email, password)
      .then(user =>{
        setLoginData({...data})
        props.history.push(ROUTES.SIGN_IN_ADM)
      })
      .catch( error =>{
        setError(error)
      })
    }
    
    
    const {nom, prenom, email, password, confirmPassword } = loginData;
    
    const btn = nom == "" || prenom == "" || email === "" || password === "" || password !== confirmPassword
    ?  <Button className="w-100" type="submit" disabled >Inscription</Button>:<Button className="w-100" type="submit">Inscription</Button>
    
    //gestion erreur
    
    const errorMsg = error !== "" && <span className="alert alert-danger">{error.message}</span>



    return(
        <Fragment>
    <Container className="d-flex align-items-center justify-content-center mt-5" style={{ minWidth:"100vh"}}>
      <div className="w-100" style={{ maxWidth:"400px"}}>
      <Card>
        <Card.Body>
          { errorMsg }
          <h2 className="text-center mb-4">Inscription</h2>
          <Form onSubmit={ handleSubmit }>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="nom" value={ nom } onChange={ handleChange } required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="text" name="prenom" value={ prenom } onChange={ handleChange } required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={ email } onChange={ handleChange }  required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" name="password" value={ password } onChange={ handleChange }  required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirmer votre mot de passe</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={ confirmPassword } onChange={ handleChange }  required />
            </Form.Group>
              { btn }
           
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Avez vous un compte? <Link to="/signin_adm">Connecter-vous svp</Link>
      </div>
      
      </div>
      </Container>
    </Fragment>
        
    )
}

const SignUpLink = () => (
  <p>
    sory vous n'avez pas de compte <Link to={ROUTES.SIGN_UP}>inscrit ici</Link>
  </p>
);

{/*const SignUpForm = withRouter(withFirebase(SignUpFormBase));*/}

export default SignUpPage;

{/*export { SignUpForm, SignUpLink };*/}