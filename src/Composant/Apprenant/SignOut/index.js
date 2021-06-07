import React, { useState, useEffect,  Fragment} from 'react';
import { withFirebase } from '../../Firebase';
import './index.css'

 
const SignOutButton = ({ firebase }) => {
    

    // const firebase = useContext(FirebaseContext)
    const [checked, setChecked] = useState(false);

        useEffect(() => {
        if(checked){
            console.log("deconexion")
            firebase.doSignOut();
        }
    }, [checked, firebase])

   
    const handleChange = event =>{
        setChecked(event.target.checked)
    }
    return(
       <Fragment>
        <div className="logoutContainer">
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={checked}/>
                <span className="slider round"></span>
            </label>
        </div>
  
       </Fragment>
            
        
    )
}
    
  

 
export default withFirebase(SignOutButton);