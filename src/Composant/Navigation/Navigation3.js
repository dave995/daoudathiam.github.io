import React from 'react';
import { Link } from 'react-router-dom';
 
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';
 
const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>
    </div>
  );
   
  const NavigationAuth = ({ authUser }) => (
    <div className="bg-dark">
      <div className="container-fluid">
      <div className="row">
        <nav className="col navbar navbar-expand-lg navbar-dark">
        <Link to={ROUTES.HOME} className="navbar-brand nav-link">Daouda Thiam</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" class="collapse navbar-collapse d-flex justify-content-between">
          <ul  className="navbar-nav">
            <li className="nav-item">
              <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.HOME} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.ACCOUNT} className="nav-link">Account</Link>
            </li>
            {authUser.roles.includes(ROLES.ADMIN) && (
              <li className="nav-item">
                <Link to={ROUTES.ADMIN} className="nav-link">Admin</Link>
              </li>
            )}
            
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item ml-5">
                <SignOutButton />
            </li>
          </ul>
        </div>
        </nav>
      </div>
      </div>
    </div>
    
  );
   
  const NavigationNonAuth = () => (
    <div className="bg-dark">
      <div className="container">
      <div className="row">
        <nav className="col navbar navbar-expand-lg navbar-dark">
        <Link to={ROUTES.HOME} className="navbar-brand nav-link">DAvycod</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" class="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.SIGN_IN} className="nav-link">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>

      </div>
      </div>
    </div>
    
  );
 
export default Navigation;