import React from 'react';
import calendrier from '../image/calendrier.jpeg'
import "./CalendarCard.css"

const CalendarCard = () => {
    return(
        <div>

                  
            <h6>Calendrier</h6>
            <div className="card d-flex flex-row align-items-center card-teacher mb-3 mx-auto">
                <div className="col-4">
                    <img className="card-img-top" src={calendrier} alt="image calendrier" />
                </div>
                <div className="card-body col-8 px-0">
                    <div>
                        <p className="card-title my-0"> le calendrier des cours</p>
                        <a href="/home/:calendar" class="stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarCard;