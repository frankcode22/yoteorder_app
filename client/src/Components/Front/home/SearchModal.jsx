
import React, { useCallback,useState,useEffect,useContext } from 'react';

import { Modal, Button } from "react-bootstrap";




function SearchModal({latitude,longitude,show,handleShow}) {

    
   

  
  return (
    <div>

    <Modal class="modal fade" id="modaldemo8" show={show}>

    <Modal.Header>
        <Modal.Title>Initiating your Search</Modal.Title>
    </Modal.Header>
    <Modal.Body class="modal-body text-center p-4 pb-5">




        <div class="spinner-border text-primary me-2" style={{ width: '3rem', height: '3rem' }} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>


        <p class="text-center"> <div class="me-4 text-center text-primary">
        <span><i class="fe fe-map-pin fs-20"></i></span>
    </div>{latitude} ::{longitude}</p>


    
      
        <h4 class="h4 mb-0 mt-3">Processing..</h4>

        <p class="card-text">Your search for  <span class="tag tag-rounded tag-icon tag-green"><i class="fe fe-calendar"></i> <a href="javascript:void(0)" class="tag-addon tag-addon-cross tag-green"><i class="fe fe-x text-white m-1"></i></a></span> currently in progress</p>






    </Modal.Body>
    <Modal.Footer>

    {/**  <button class="btn btn-light" type="reset" onClick={() => {
      handleClose();
    }}>Cancel</button>
  */}

        <Button variant="secondary" onClick={handleShow}>
            Close
        </Button>

   
        {/* 
<Button variant="primary" onClick={handleClose}>
Save Changes
</Button> */}

    </Modal.Footer>
</Modal>
    
    
    
    
    </div>
  )
}

export default SearchModal