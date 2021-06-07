import React from "react"
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constant/routes';

const Navigation = () => {
    return(
        <div className="bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <nav className="col navbar navbar-expand-lg navbar-dark">
                        <Link className="navbar-brand" to={ROUTES.LANDING}>e-learning</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.SIGN_IN}>SignInUser</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.SIGN_IN_ADM}>SignInAdmin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.SIGN_UP}>SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.HOME}>DashboardApp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.HOME_ADM}>DashboardAdmin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.COURS_ADM}>ListeCoursAdm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.COURS_APP}>ListeCoursApp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.ADD_COURSE}>AjoutCours</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.ARCHI_COURSE}>ArchCours</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.DETAIL_ARCHI_COURSE}>DetailArchi</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation;