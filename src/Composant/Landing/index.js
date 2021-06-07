import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import "./Landing.css"

function LandingPage(props) {
  return (
    <Fragment>
      <div className="container">
        <div classNameName="row">
          <div className="d-flex justify-content-around">
            {/* <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}>
              <div className="card-header text-center">Apprenant</div>
              <div className="card-body">
              <Link to="/signin" className="btn btn-white text-white">se connecter en tant que apprenant</Link>
              </div>
            </div> */}
          <div className="card text-white bg-info mb-3 mt-5" style={{ maxWidth: "23rem"}}>
            {/* <div className="card-header text-center">Administrateur</div> */}
            <div className="card-body">
              <Link to="/signin_adm" className="btn btn-white text-white">se connecter</Link>
            </div>
          </div>
        </div>

        

      </div>
    </div>
{/* <div>
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Cover</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main class="px-3">
    <h1>Cover your page.</h1>
    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
  </footer>
</div>
</div> */}

    </Fragment>
  );
}

export default LandingPage;