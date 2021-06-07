
import React, {Fragment } from "react"
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter,  } from 'react-router-dom';
import jQuery from 'jquery' 
import Aside from "./Aside/Aside"
import './HomePageApp.css';
import * as ROUTES from '../../../Constant/routes';
import Calendars from "./Aside/Calendars"
import ListeCours from "../../Apprenant/Cours/ListeCours/ListeCours"
import Badge from 'react-bootstrap/Badge'
import SignOutButton from '../SignOut'
import CardGroup from 'react-bootstrap/Card'
import Card from 'react-bootstrap/Card'




const HomePageApp = () => {

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
        <Fragment>
            
                <div className="row">
                    <div className="col-lg-9 main-page">
                    <div class="wrapper d-flex align-items-stretch">
                    <BrowserRouter>
                        
                    <nav id="sidebar" class="active bg-success">
                    
                            <h1><Link className="logo nav-link" to={ROUTES.HOME}>T.</Link></h1>
                            <ul class="list-unstyled components mb-5">
                            <li className="nav-item active">
                                <Link className="nav-link" to={ROUTES.HOME}><span class="fa fa-home"></span>Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={ROUTES.CALENDAR}><span class="fa fa-calendar" aria-hidden="true"></span> Calendrier</Link>
                            </li>
                            <li>
                                <a href="#"><span class="fa fa-cogs"></span> Compte</a>
                            </li>
                            <li>
                                <Link className="nav-link" to={ROUTES.HOME_ADM}><span class="fa fa-paper-plane"></span> PageAdmin</Link>
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

                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                    <Link className="nav-link" to={ROUTES.COURS_APP}>Liste des Cours</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={ROUTES.SIGN_OUT}>Déconnexion</Link> */}
                                    <SignOutButton/>
                                  
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                            
                    <div className="d-flex">
                    <h6 class="mb-4"> apprenant</h6>
                    <div className="d-flex flex-row ml-auto pr-5">
                        <p> 
                            Messages <Badge pill variant="danger" className="mr-3">new</Badge>
                        </p>
                        <p>
                            Notification <Badge pill variant="info">4</Badge>
                        </p>
                    </div>
                    
                </div>
                        

                                  {/* exemple */}
                                  <Card>
               <Card.Header>dashboard</Card.Header>
               <Card.Body>
               <Card.Title>DEROULEMENT DES EXAMENT</Card.Title>
             <Card.Text>
              Pas de date pour le moment.
             </Card.Text>
              <button className="mt-5 bg-green-400 w-full hover:bg-green-500 
                 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              AJOUTER
            </button>
               </Card.Body>
            </Card>
                            <Switch>
                                <Route path="/liste_cours_app" component={ListeCours}/>
                                <Route exact path="/calendar" component={Calendars}/>
                            </Switch>

                            <footer style={{position: "fixed", bottom: "0px", left: "220px"}} class="footer my-2 py-3 bg-none text-center">                
                                <div class="container text-center">
                                    <span class="text-muted">Copyright &copy; by DAVYCOD.</span>
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
        </Fragment>
        
    )
}

export default HomePageApp;
