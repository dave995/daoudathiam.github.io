import React from 'react';
import './statistique.css';

const Statistique = () => {
    return(
        <div>
            <h6>Stats</h6>
            <div className="row mb-lg-2">
                <div className="col-12 mb-2 col-md-6">
                    <div className="card card-stat">
                    <div className="card-body">
                        
                        <p className="card-text">Cours complets</p>
                        <h5 className="card-title">15</h5>
                    </div>
                    </div>
                </div>
                <div className="col-12 mb-2 col-md-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">EXAMEN </p>
                        <h5 className="card-title">5</h5>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row mb-lg-2">
                <div className="col-12 mb-2 col-md-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">En cours</p>
                        <h5 className="card-title">2</h5>
                    </div>
                    </div>
                </div>
                <div className="col-12 mb-2 col-md-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">Professeur</p>
                        <h5 className="card-title">4</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistique;