import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState, usecontext } from 'react';
import AddForm from './AddForm';
import { ApprenantContext } from './context/AppreantContext';




function ListApprenant(props) {



  const [ show, setShow ] = useState(false)
  
  const handleShow = () => setShow(true)

  const handleClose = () => setShow(false)


    return (
       
        <>
    
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Gestion apprenant</h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={ handleShow } className="btn btn-success" data-target="modal">ADD</Button>
                </div>
            </div>
        </div>
        <table className="table  table-striped">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Telephone</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                    <th scope="row">Nguirane</th>
                    <td>Alioune Badara</td>
                    <td>777777</td>
                    <td>alioune@gmail.com</td>
                    <td>
                        <button className="btn btn-primary"><i className="fas fa-pencil-alt"></i></button>
                    </td>
                    <td>
                      <button className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                    </td>
                    </tr>
                </tbody>
        </table>
            <Modal show={show} onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>Ajouter un apprenant</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ handleClose } variant="secondary">close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListApprenant;