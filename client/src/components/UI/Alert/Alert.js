import React, {Fragment, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Alert = (props) => {

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  const showAlert = () => {
      return (
        <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uh Oh!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorry You Can't Alter or Delete Others Posts</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      )
  }


  
  return (showAlert())
}

export default Alert;

