import React from "react"
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constant/routes';

const Navigation2 = () => {
    return(
        <div className="bg-dark">
            <div className="container-fluid">
                <div className="row">
                    <nav className="col navbar navbar-expand-lg navbar-dark">
                        <Link className="navbar-brand" to={ROUTES.LANDING}></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.ADD_PROF}>AjoutProf</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.LISTE_PROF}>ListeProf</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.DETAIL_PROF}>DetailProf</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.ADD_APP}>AjoutApprenant</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.LISTE_APP}>ListeApprenant</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES.DETAIL_APP}>DetailApprenant</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation2;