import React from 'react';
import dave from '../image/dave.jpeg'

const AboutTeacher = () => {
    return(
        <div>
            <h6>PROFESSEUR</h6>
            <div className="card d-flex flex-row align-items-center card-teacher mb-1 mx-auto">
                            <div className="col-4">
                                <img className="card-img-top img-card-teacher rounded-circle" src={dave} alt="Card image cap" />
                            </div>
                            <div className="card-body col-8 px-0">
                                <div>
                                    <h6 className="card-title my-0">M THIAM</h6>
                                    <p className="card-text my-0">REACT js</p>
                                </div>
                            </div>
                        </div>
                  
            
        </div>
    )
}

export default AboutTeacher;