import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Listprofesseur } from './ListeProfesseur/ListeProfesseur';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <h3 className="text-left  text-3xl mt-20 
                    text-base leading-8 text-black font-bold tracking-wide
                     uppercase">Liste des professeurs</h3>
                    <Listprofesseur />
                    <Heading />
                </div>
            </div>
        </Fragment>
    )
}