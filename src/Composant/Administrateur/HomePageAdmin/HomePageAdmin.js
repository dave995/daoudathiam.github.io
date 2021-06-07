
import React from "react"
import "./HomePageAdmin.css"
import jQuery from 'jquery' 
import cx from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import LandingAdm from "./Landing/LangingAdm"
import ListeCoursAdm from "../../Administrateur/Cours/ListeCoursAdmin/ListeCoursAdmin"
import ListApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant"
import ListeProfesseur from "../../Administrateur/Professeur/ListeProfesseur/ListeProfesseur"
import AjoutProfesseur from "../Professeur/AjoutProfesseur/AjoutProfesseur"
import AjoutApprenant from "../Apprenant/AjoutApprenant/AjoutApprenant"
import Archive from "../Cours/Archive/Archive"
import DetailProfesseur from "../Professeur/DetailProfesseur/DetailProfesseur"
import * as ROUTES from '../../../Constant/routes';
//import ListeApprenant from "../../Administrateur/Apprenant/ListeApprenant/ListeApprenant";
import AddCourse from "../Cours/AjoutCours/AddCourse";
import Aside from "./Aside/Aside";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import ArchiveApp from "../Apprenant/Archive/Archives";


import {
    Row,
    Col,
    Alert,
    button,
    ButtonGroup,
    Breadcrumb,
    BreadcrumbItem,
    Progress,
    badge,
    ListGroup,
    ButtonDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Table
  } from 'react-bootstrap';
  import s from './Dashboard.module.scss';

const HomePageAdmin = () => {


    {(function($) {

        "use strict";
    
        var fullHeight = function() {
    
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
    
        };
        fullHeight();
    
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    
    })(jQuery);}

    return(
        <div>
           
            <div className="row">
            <div className="col-lg-9 pr-1 main-page">
            <div class="wrapper d-flex align-items-stretch">
            <BrowserRouter> 
			<nav id="sidebar" class="active bg-success">
				<h1><Link className="logo nav-link" to={ROUTES.HOME_ADM}></Link></h1>
                <ul class="list-unstyled components mb-5">
                <li className="nav-item active">
                    <Link className="nav-link" to={ROUTES.HOME_ADM}><span class="fa fa-home"></span>Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fa fa-chalkboard-teacher" aria-hidden="true"></span> Ajouter</Link>
                    <div className="dropdown-menu bg-success">
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_APP}>Ajouter apprenant</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Ajouter professeur</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_COURSE}>Ajouter cours</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={ROUTES.HOME_ADM} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button"><span class="fas fa-archive" aria-hidden="true"></span> Archives</Link>
                    <div className="dropdown-menu bg-success">
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ARCHI_APP}>Archive des apprenant</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ADD_PROF}>Archive des professeur</Link>
                        <Link className="dropdown-item px-4 py-2" to={ROUTES.ARCHI_COURSE}>Archive des cours</Link>
                    </div>
                </li>
                <li>
                    <a href="#"><span class="fa fa-cogs"></span> Compte</a>
                </li>
                <li>
                    <Link className="nav-link" to={ROUTES.HOME}><span class="fas fa-align-justify"></span>Retour au page</Link>
                </li>
                </ul>

                <div class="footer">
                    <p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by crazy_coderz.
                    </p>
                </div>
            </nav>

            {/*------Page Content------*/} 
            
            <div id="content" class="p-4 p-md-5">

            <nav class="navbar navbar-expand-lg navbar-gray bg-gray">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-success">
                <i class="fa fa-bars"></i>
                <span class="sr-only"> Menu</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.COURS_ADM}>Liste Cours</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.LISTE_PROF}>Liste des prof</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.LISTE_APP}>Liste Apprenant</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
                <div className="d-flex">
                    <h6 class="mb-4" >administrateur</h6>
                    <div className="d-flex flex-row ml-auto pr-5">
                        <p> 
                            Messages <badge pill variant="danger" className="mr-3">nouveauté</badge>
                        </p>
                        <p>
                            Notification <badge pill variant="success">9</badge>
                        </p>
                    </div>
                    
                </div>

                <div>
                <Row>
          <Col sm={12} md={6}>
            <card
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-user mr-xs opacity-70" />{' '}
                    Users
                  </h5>
                </div>
              }
            >
              <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Alice</td>
                    <td>alice@email.com</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bob</td>
                    <td>bob@email.com</td>
                    <td>
                      <span className="py-0 px-1 bg-warning rounded text-white">delayed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Duck</td>
                    <td>duck@email.com</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Shepherd</td>
                    <td>shepherd@email.com</td>
                    <td>
                      <span className="py-0 px-1 bg-danger rounded text-white">removed</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </card>
          </Col>
          <Col sm={12} md={6}>
            <card title="Alerts">
              <Alert
                className="alert-sm"
                color="warning"
              >
                
              </Alert>
              <Alert
                className="alert-sm"
                color="success"
              >
               
              </Alert>
              <Alert
                className="alert-sm"
                color="info"
              >
            
              </Alert>
              <Alert
                className="alert-sm clearfix"
                color="danger"
              >
               
               
              </Alert>
            </card>
          </Col>
        </Row>
      
                </div>


                
                <Switch>
                    <Route path="/home_adm" component={LandingAdm}/>
                    <Route path="/liste_cours_adm" component={ListeCoursAdm}/>
                    <Route path="/liste_app" component={ListApprenant}/>
                    <Route path="/archive_app" component={ArchiveApp}/>
                    <Route path="/liste_prof" component={ListeProfesseur}/>
                    <Route path="/ajout_cours" component={AddCourse}/>
                    <Route path="/archive" component={Archive}/>
                    <Route path="/ajout_prof" component={AjoutProfesseur}/>
                    <Route path="/edit/:id" component={DetailProfesseur}/>
                    <Route path="/ajout_app" component={AjoutApprenant}/>
                </Switch>
                
                <footer style={{position: "fixed", bottom: "0px", left: "220px"}} class="footer my-2 py-3 bg-none text-center">
                
                <div class="container text-center">
                    <span class="text-muted">Copyright &copy; DavyCod.</span>
                </div>
            </footer>
                
                
            </div>
            

            </BrowserRouter>
            
            
            </div>
            
            
            </div>
            <div className="col-lg-3 pt-5 px-0 mx-0 aside">
                <Aside />
            </div>
            
            
		</div>
        
        </div>
    )
}

export default HomePageAdmin;
