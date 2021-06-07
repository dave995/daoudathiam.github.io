import React from 'react'
import { Redirect, Route } from 'react-router'
import * as ROUTES from '../../Constant/routes';

const ProtectedRoute = ({authenticated : authenticated, component: Component, ...rest}) => {
    return <Route {...rest} render={(props) =>{
        if(authenticated){
            return <Component/>
        } else{
            // <Redirect to={{ pathname: '/home_adm', state:{from:props.location}}}/>
            <div className="loader">
                <p className="loadText"></p>
            </div>
            props.history.push(ROUTES.SIGN_IN_ADM)
        }
    }}/>
}

export default ProtectedRoute
